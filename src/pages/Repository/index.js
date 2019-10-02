/*import React from 'react';
// import { Container } from './styles';
export default function Repository({ match }) {
  const { repository } = match.params;
  return <h1>Repository { decodeURIComponent(repository) }</h1>;
}
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Loading, Owner, IssueList, FilterStates, Pages } from './styles';
import Container from '../../components/Container';

export default class Repository extends Component {

  static propTypes = {
    // match eh um objeto porque possui outra propriedade dentro
    match: PropTypes.shape({
      // params tbm eh um objeto
      params: PropTypes.shape({
        repository: PropTypes.string,
      })
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filter: 'open',
    per_page: 5,
    page: 1,
  }

  async componentDidMount() {
    const { match } = this.props;
    const { filter, per_page, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);
    /*
    // api.github.com/repos/rocketseat/unform
    // api.github.com/repos/rocketseat/unform/issues
    // EXECUTA UMA A UMA, UMA APOS A OUTRA:
    const response = await api.get(`/repos/${repoName}`);
    const issues = wait api.get(`/repos/${repoName}/issues`);
    */

    // EXECUTAM JUNTAS
    const [ repository, issues ] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        // paramentos de url "/?state=
        params: {
          state: filter,
          per_page,
          page,
        }
      })
    ]);
    // console.log(repository);
    // console.log(issues);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    })
  }

  async componentDidUpdate(_, prevState) {

    const { repository, filter, per_page, page } = this.state;

    if(prevState.filter !== filter || prevState.page !== page ) {

      const issues = await api.get(`/repos/${repository.full_name}/issues`, {
        params: {
          state: filter,
          per_page,
          page,
        }
      })

      this.setState({
        issues: issues.data,
      })
    }
  }

  filterAll = e => {
    this.setState({ filter: e.target.value })
  };

  filterOpen = e => {
    this.setState({ filter: e.target.value })
  };

  filterClosed = e => {
    this.setState({ filter: e.target.value })
  };

  pagination = action => {
    const { page } = this.state;
    this.setState({ page: action === 'back' ? page -1 : page + 1 });
  };

  render() {
    const { repository, issues, loading, filter, page } = this.state;

    if(loading) {
      return <Loading> Carregado... </Loading>
    }

    return(
      <Container>

        <Owner>
          <Link to="/" title="voltar"> Voltar aos repositórios </Link>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <h1>{ repository.name }</h1>
          <p>{ repository.description }</p>
        </Owner>

        { issues.length > 0 &&

          <IssueList>

            <h1>Issues{filter && " " + filter }:</h1>

            <FilterStates>

              <button
                value="all"
                disabled={ filter === "all" }
                onClick={this.filterAll}
              >
                Todos
              </button>
              <button
                value="open"
                disabled={ filter === "open" }
                onClick={this.filterOpen}
              >
              Abertos
              </button>
              <button
                value="closed"
                disabled={ filter === "closed" }
                onClick={this.filterClosed}
              >
                Fechados
              </button>

            </FilterStates>

            { issues.map(issue => (
              <li key={String(issue.id)}>
                <img
                  src={issue.user.avatar_url}
                  alt={issue.user.login}
                />
                <div>
                  <strong>
                    <a
                      href={issue.html_url}
                      title={issue.title}
                      target="_blank"
                      rel="noopener noreferrer external nofollow"
                    >
                      {issue.title}
                    </a>
                    { /** LABELS */ }
                    {issue.labels.map(label => (
                        <span key={String(label.id)}>
                          { label.name }
                        </span>
                      ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            )) }
          </IssueList>
        }
        { issues.length > 0 &&
          <Pages>

            <p>Página: {page}</p>

            <span>
              <button
                type="button"
                disabled={page < 2}
                onClick={() => this.pagination('back')}
              >
                Anterior
              </button>

              <button
                type="button"
                disabled={issues.length < this.state.per_page }
                onClick={() => this.pagination('next')}
              >
                Próxima
              </button>
            </span>
          </Pages>
        }
      </Container>
    );
  }
}


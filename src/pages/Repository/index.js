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

import { Loading, Owner, IssueList } from './styles';
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
  }

  async componentDidMount() {
    const { match } = this.props;

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
          state: 'open',
          per_page: 5,
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

  render() {
    const { repository, issues, loading } = this.state;

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
        <IssueList>
          { issues.map(issue => (
            <li key={String(issue.id)}>
              <img
                src={issue.user.avatar_url}
                alt={issue.user.login}
              />
              <div>
                <strong>
                  <a href={issue.html_url} title={issue.title}>
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
      </Container>
    );
  }
}


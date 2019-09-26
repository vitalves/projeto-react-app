/*import React from 'react';
// import { Container } from './styles';
export default function Repository({ match }) {
  const { repository } = match.params;
  return <h1>Repository { decodeURIComponent(repository) }</h1>;
}
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

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

    return <h1>Repository</h1>
  }
}


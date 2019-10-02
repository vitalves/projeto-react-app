// import React from 'react'; // export default function Main()
import React, { Component } from 'react'; // export default class Main extends Component {
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List, Alert } from './styles';

/*
export default function Main() {
  return (
    <Title error={false}>
      Main
      <small> Menor </small>
    </Title>
  );
}
*/

// export default function Main() {
export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    alert: false
  };

  componentDidMount(){
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate (_, prevState) {
    const { repositories } = this.state;

    if(prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // console.log(this.state.newRepo);

    this.setState({
      loading: true,
      error: false,
      alert: false
    });

    const { newRepo, repositories } = this.state;

    try {

      if (newRepo === '') {
        this.setState({ alert: 'O campo repositório não pode ser vazio' });
        throw new Error ('O campo repositório não pode ser vazio');
      }

      if (repositories.find(rep => rep.name === newRepo)) {
        this.setState({ alert: 'Repositório já inserido' });
        throw new Error ('Repositório já inserido');
      }

      try {
        await api.get(`/repos/${newRepo}`);
      } catch (error) {
        this.setState({ alert: 'Repositório não encontrado' });
        throw new Error ('Repositório não encontrado');
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [data, ...repositories],
        newRepo: '',
        // loading: false,
      });
    } catch (error) {

      this.setState({ error: true });

    } finally {

      this.setState({ loading: false })

    }

  };

  render() {
    const { newRepo, loading, repositories, alert } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit} error={alert} >

          <input
            type="text"
            placeholder="Adicionar repositório"
            autoComplete="on"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        { (alert) &&
          <Alert alert={alert}> { alert } </Alert>
        }

        <List>
          {repositories.map(repository => (
            <li key={repository.name} >
              <span> { repository.name } </span>
              <Link
                to={`/repository/${encodeURIComponent(repository.name)}`}
                title={repository.name}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

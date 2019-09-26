import React from 'react';

// import { Container } from './styles';

export default function Repository({ match }) {

  const { repository } = match.params;

  return <h1>Repository { decodeURIComponent(repository) }</h1>;
}

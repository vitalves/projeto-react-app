import styled, { keyframes, css } from 'styled-components';
/*
export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? '#F00' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 14px;
    color: #333;
  }
`; */

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#d6400e' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const rotate90g = keyframes`
  from{
    transform: rotate(0deg)
  }
  to {
    transform: rotate(90deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #7159aa;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover svg {
    animation: ${rotate90g} 2s;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Alert = styled.span`
  ${props => (props.alert ? 'color: #d6400e;margin:10px;font-size:11px': '' )}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }

`;

import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction:column;
  align-items: center;

  a {
    color: #9159c1;
    font-size:16px;
    text-decoration: none;

    &:hover {
      color: #7159aa;
    }
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
    opacity: .95;

    &:hover {
      opacity: 1;
      box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    }
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  h1 {
    font-size: 25px;
    margin-bottom: 15px;
    display: flex;
    justify-content:center;
    color: #555;
  }

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const FilterStates = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  margin: 15px auto;

  button {
    width: 90px;
    border: none;
    background: #7159c1;
    color: #fff;
    padding: 4px 6px;
    border-radius: 4px;

    & + button{
      margin-left: 15px;
    }

    &:hover {
      background: #7159a1;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;

export const Pages = styled.div`
  p {
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
  span {
    display: flex;
    justify-content: center;
  }
  button {
    width: 100px;
    margin-top: 10px;
    padding: 4px 6px;
    border: none;
    border-radius: 3px;
    background: #7159c1;
    color: #fff;

    & + button{
      margin-left: 15px;
    }

    &:hover {
      background: #7159a1;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

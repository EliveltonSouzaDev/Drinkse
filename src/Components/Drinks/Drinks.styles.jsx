import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  justify-content: space-evenly;

  a {
    margin: 2rem;
  }

  hr {
    border: solid 1px lightgray;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  h1 {
    width: 100%;
    color: var(--green);
    text-align: center;
    margin: 2rem auto;
  }
  .img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  .card {
    height: 400px;
    text-align: center;
    width: 300px;
    background-color: #f1f1f1;
    margin: 40px;
    border-radius: 8px;
    justify-self: center;
    -webkit-box-shadow: -1px 3px 14px 8px rgba(135, 135, 135, 0.75);
    box-shadow: -1px 3px 14px 8px rgba(135, 135, 135, 0.75);
    transition: all 0.5s;
    :hover {
      transform: scale(1.1);
    }
  }

  .button {
    margin-top: 1rem;
    width: 150px;
    font-size: 16px;
    padding: 10px;
    background-color: green;
    border-radius: 8px;
    :hover {
      background-color: var(--orange);
      color: white;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

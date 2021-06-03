import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  grid-area: main;

  img {
    width: 70%;
    align-self: center;
    justify-self: center;
    margin: 1rem;
    border-radius: 8px;
  }
  h1 {
    justify-self: center;
    margin: 2rem;
    color: var(--orange);
  }

  p {
    width: 70%;
    justify-self: center;
    margin: 1rem 0 2rem 0;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    flex-wrap: wrap;
    img,
    p {
      width: 90%;
    }
  }
`;

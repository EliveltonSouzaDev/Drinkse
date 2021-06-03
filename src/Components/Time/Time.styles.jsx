import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  grid-area: main;
  @media (max-width: 768px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;

  p {
    margin: 1rem;
  }
  h3 {
    margin: 1rem;
  }

  img {
    border-radius: 50%;
    width: 180px;
    margin: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: space-evenly;
    width: 100%;
    margin: 1rem;
  }

  div svg {
    margin: 0.2rem 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

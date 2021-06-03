import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  margin-top: 0.3rem;
  height: 60vh;
  justify-content: space-between;
  grid-area: main;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 30%;
    h1 {
      color: var(--green);
      font-size: 38px;
      margin: 1rem 0;
    }
    p {
      font-size: 20px;
      margin: 1rem 0;
    }
    button {
      width: 250px;
      height: 3rem;
      border-radius: 50px;
      background: var(--green);
      padding: 0.3rem;
      font-weight: bold;
      font-size: 16px;
      color: #f0f0f0;
      transition: all 0.3s;
      margin: 1rem 0;

      &:hover {
        color: black;
        background-color: var(--orange);
        border: 1px solid var(--orange);
      }
    }
  }
  picture {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
  }
  img {
    width: 500px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    section {
      align-items: center;
      justify-content: center;
      width: 90%;
    }
    img {
      width: 90%;
      height: 30vh;
    }
  }
`;

import styled from "styled-components";

export const Div = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: main;
  height: 100vh;
  background-color: #fafafa;
  background-image: linear-gradient(62deg, #fafafa 0%, #ced3ce 100%);

  .spinner {
    width: 70px;
    height: 70px;
    border: 8px solid;
    border-color: var(--orange) transparent var(--green) transparent;
    border-radius: 50%;
    animation: spin 1.2s linear infinite;
  }

  img {
    width: 30%;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    img {
      width: 60%;
    }
  }
`;

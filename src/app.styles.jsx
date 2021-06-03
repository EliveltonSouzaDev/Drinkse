import styled from "styled-components";

export const Body = styled.div`
  background-color: #fafafa;
  background-image: linear-gradient(62deg, #fafafa 0%, #ced3ce 100%);
  height: auto;
  grid-template-rows: 5rem auto 320px;
  display: grid;
  grid-template-areas:
    "header header"
    "main main"
    "footer footer";

  /* Animações */
  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.5s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  //responsividade
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

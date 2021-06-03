import styled from "styled-components";

export const ErroStyles = styled.div`
  display: flex;
  grid-area: main;
  justify-content: center;
  img {
    width: 700px;
  }
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

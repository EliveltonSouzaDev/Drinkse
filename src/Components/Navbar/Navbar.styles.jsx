import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  grid-area: header;
  height: 85px;
  border-bottom: 2px solid #d8d3d3;
  background-color: var(--gray);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 140px;
    margin-left: 4rem;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    .logo {
      margin: 0 auto;
    }
  }
`;

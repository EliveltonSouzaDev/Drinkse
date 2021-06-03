import styled from "styled-components";

export const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: var(--gray);
  display: flex;
  bottom: 0;
  padding: 1em;
  align-items: center;
  justify-items: center;
  border-top: 2px solid #d8d3d3;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Lists = styled.div`
  display: flex;
  width: 60%;
  align-items: flex-start;
  justify-content: space-around;

  h4 {
    margin-bottom: 1rem;
    font-weight: bold;
    color: var(--green);
    :hover {
      color: var(--orange);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;

    li {
      color: black;
      margin-top: 1rem;
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    padding: 0.3rem;

    ul {
      margin: 0.2rem;
      padding: 0.3rem;
    }
  }
`;

export const Signature = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 80px;
  margin-bottom: 20px;

  img {
    width: 125px;
    margin-bottom: 15px;
  }

  p {
    width: 80%;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    line-height: 30px;
  }

  section {
    display: flex;
    width: 40%;
    margin-top: 15px;
    justify-content: space-between;
    color: var(--black);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.3rem;
  }
`;

import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  font-weight: bold;

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
    padding: 18px 10px;
    font-size: 20px;
    transition: all 0.5s;
    color: var(--green);
    font-weight: bold;
    :hover {
      color: var(--orange);
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fafafa;
    background-image: linear-gradient(68deg, #fafafa 0%, #ced3ce 100%);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    position: absolute;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: var(--orange);
    }
  }
`;

import styled from "styled-components";

export const Button = styled.button`
  width: 250px;
  height: 3rem;
  border-radius: 50px;
  font-size: 18px;
  background: ${(props) => (props.corFundo ? "var(--orange)" : "var(--green)")};
  padding: 0.3rem;
  color: white;
  transition: all 0.3s;

  &:hover {
    background: ${(props) =>
      props.corFundo ? "var(--green)" : "var(--orange)"};
  }
`;

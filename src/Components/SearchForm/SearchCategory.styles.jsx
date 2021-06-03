import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  grid-area: main;
  flex-direction: wrap;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height:58vh;

  div{
    display: flex;
    flex-direction: column;
align-items: center;    width: 100%
  }

  .section{
    display: flex;
    justify-content:center;
    width:100%
  }

  input{
    margin-top:1rem;
    width: 60%;
    border: none;
    border-color: transparent;
    background: whitesmoke;
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 1.2rem;
    -webkit-box-shadow: -1px 3px 8px 8px rgba(168, 166, 166, 0.75);
    box-shadow: -1px 3px 8px 8px rgba(170, 169, 169, 0.75);
  }
  }

  .img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  .card {
    height: 400px;
    text-align: center;
    width: 300px;
    background-color: #f1f1f1;
    margin: 40px;
    border-radius: 8px;
    justify-self: center;
    -webkit-box-shadow: -1px 3px 14px 8px rgba(135, 135, 135, 0.75);
    box-shadow: -1px 3px 14px 8px rgba(135, 135, 135, 0.75);
    transition: all 0.5s;
    :hover {
      transform: scale(1.1);
    }
  }

  button {
    margin: 1rem;
    width: 250px;
    height:50px;
    font-size: 16px;
    color: white;
    background-color:var(--green);
    border-radius: 8px;
    :hover {
      background-color: var(--orange);
      color: white;
    }


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  `;

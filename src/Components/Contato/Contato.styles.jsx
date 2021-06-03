import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  grid-area: main;
  margin: 4rem auto;
  display: flex;
  align-items: center;

  img {
    width: 500px;
    height: 60%;
  }

  .form-contact {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: "Arial", Times, serif;
  }

  .form-contact-input {
    width: 100%;
    color: #292929;
    font-size: 18px;
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    height: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    text-indent: 20px;
  }

  .form-contact-textarea {
    width: 100%;
    color: #292929;
    font-size: 18px;
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    height: 200px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    text-indent: 20px;
    padding-top: 16px;
    padding-left: 0;
    padding-right: 0;
    font-family: "Arial", Times, serif;
  }

  .form-contact-button {
    width: 300px;
    height: 3rem;
    border-radius: 50px;
    background: var(--orange);
    padding: 0.3rem;
    font-weight: bold;
    font-size: 16px;
    color: #f0f0f0;
    transition: all 0.3s;
    margin: 1rem 0;

    &:hover {
      color: black;
      background-color: var(--green);
      border: 1px solid var(--green);
    }
  }

  .form-contact-button:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;

    img {
      width: 80%;
      margin-bottom: 2rem;
      height: 60%;
    }

    .form-contact {
      width: 90%;
    }
  }
`;

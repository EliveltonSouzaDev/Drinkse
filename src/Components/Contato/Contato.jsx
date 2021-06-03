import React from "react";
import { Section } from "./Contato.styles";
import FormImg from "../../images/formImg.png";

const Contato = () => {
  return (
    <Section className="animeLeft">
      <img src={FormImg}></img>
      <form action="#" className="form-contact" method="post" tabIndex="1">
        <input
          type="text"
          className="form-contact-input"
          name="nome"
          placeholder="Nome"
          required
        />
        <input
          type="email"
          className="form-contact-input"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="tel"
          className="form-contact-input"
          name="tel"
          placeholder="Telefone"
        />
        <textarea
          className="form-contact-textarea"
          name="conteudo"
          placeholder="Deixe uma mensagem"
          required
        ></textarea>
        <button type="submit" className="form-contact-button">
          Enviar
        </button>
      </form>
    </Section>
  );
};

export default Contato;

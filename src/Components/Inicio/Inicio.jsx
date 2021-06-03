import React from "react";
import { Link } from "react-router-dom";
import Drinks from "../../images/imgDrinks.png";
import { Section } from "./Inicio.styles";

const Inicio = () => {
  return (
    <Section className="animeLeft">
      <section>
        <h1>Bem vindo ao Drink-se</h1>
        <p>
          Encontre de forma simples e prática as melhores receitas de drinks
          feitas pelo mundo!
        </p>
        <Link to="/drinks">
          <button>Encontre Aqui</button>
        </Link>
      </section>
      <picture>
        <img src={Drinks}></img>
      </picture>
    </Section>
  );
};

export default Inicio;

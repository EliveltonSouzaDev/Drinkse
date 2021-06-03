import React, { useState, useEffect } from "react";
import { Container } from "./Drinks.styles";
import axios from "axios";

import Home from "../SearchForm/SearchCategory";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import ButtonDefault from "../Button/Button";

function Drinks() {
  const [data, setData] = useState({ drinks: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container className="animeLeft">
        <Link to="/drinks/buscar">
          <ButtonDefault text={"Buscar Drinks"}></ButtonDefault>
        </Link>
        <hr />

        <h1>Drinks Populares</h1>

        {data.drinks.slice(0, 10).map((drinks) => (
          <section className="card" key={drinks.drinks}>
            <img className="img" src={drinks.strDrinkThumb} alt="img"></img>
            <p>{drinks.strDrink}</p>
            <button className="button">Saiba mais</button>
          </section>
        ))}
      </Container>
    </>
  );
}

export default Drinks;

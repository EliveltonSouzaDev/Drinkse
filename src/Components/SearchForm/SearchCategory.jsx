import { useState } from "react";
import api from "../../services/api";
import { Section } from "./SearchCategory.styles";

const Home = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  return (
    <Section>
      <div>
        <input type={"text"} onChange={(e) => setValue(e.target.value)} />
        <section className="section">
          <button
            onClick={async () => {
              const result = await api.get(`/search.php?s=${value}`);
              setData(result.data.drinks);
            }}
          >
            Buscar Drinks por nome
          </button>

          <button
            onClick={async () => {
              const result = await api.get(`/filter.php?c=${value}`);
              setCategory(result.data.drinks);
            }}
          >
            Buscar Drinks por categoria
          </button>
        </section>
      </div>

      {data.map((drinks) => (
        <section className="card" key={drinks.id}>
          <img className="img" src={drinks.strDrinkThumb} alt="img"></img>
          <p>{drinks.strDrink}</p>
          <button className="button">Saiba mais</button>
        </section>
      ))}

      {category.map((drinks) => (
        <section className="card" key={drinks.id}>
          <img className="img" src={drinks.strDrinkThumb} alt="img"></img>
          <p>{drinks.strDrink}</p>
          <button className="button">Saiba mais</button>
        </section>
      ))}
    </Section>
  );
};

export default Home;

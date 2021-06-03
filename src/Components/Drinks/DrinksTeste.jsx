import React from "react";

const DrinksTeste = () => {
  return (
    <div>
      <main className={style.container}>
        <BrowserRouter>
          <div>
            <Link to="/drinks/drinkspop" className={style.link}>
              Populares
            </Link>
          </div>
          <div>
            <Link to="/drinks/buscadrinks" className={style.link}>
              Buscar
            </Link>
          </div>
          <Switch>
            <Route exact path="/drinks/drinkspop" component={DrinksPop} />
            <Route exact path="/drinks/buscadrinks" component={BuscaDrinks} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default DrinksTeste;

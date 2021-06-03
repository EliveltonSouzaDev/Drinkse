import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Drinks from "./Components/Drinks/Drinks";
import Error404 from "./Components/Error/Error404";
import Inicio from "./Components/Inicio/Inicio";
import Sobre from "./Components/Sobre/Sobre";
import Time from "./Components/Time/Time";
import Contato from "./Components/Contato/Contato";
import Home from "./Components/SearchForm/SearchCategory";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Inicio />
      </Route>
      <Route exact path="/contato">
        <Contato />
      </Route>
      <Route exact path="/time">
        <Time />
      </Route>
      <Route exact path="/sobre">
        <Sobre />
      </Route>
      <Route exact path="/drinks">
        <Drinks />
      </Route>
      <Route exact path="/drinks/buscar">
        <Home />
      </Route>
      <Route exact path="*">
        <Error404 />
      </Route>
    </Switch>
  );
};

export default Routes;

import React from "react";
import { Div } from "./Loader.styles";
import Logo from "../../images/logoLoading.png";

const Loader = () => {
  return (
    <Div>
      <img className="logo" src={Logo} alt="logomarca Drink-se" />

      <div className="spinner"></div>
    </Div>
  );
};

export default Loader;

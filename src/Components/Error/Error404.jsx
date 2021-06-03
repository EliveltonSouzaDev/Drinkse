import React from "react";
import ImgErro from "../../images/erro404.png";
import { ErroStyles } from "./Error404.styles";

const Error404 = () => {
  return (
    <ErroStyles>
      <img src={ImgErro} alt="imagem de página não encontrada"></img>
    </ErroStyles>
  );
};

export default Error404;

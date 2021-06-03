import React from "react";
import ImgReunion from "../../images/reunion.jpg";
import ModalInfo from "../Modal/Modal";
import { Container } from "./Sobre.styles";

const Sobre = () => {
  return (
    <Container className="animeLeft">
      <h1>Sobre a Drink-se</h1>
      <img src={ImgReunion} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
        sed nisi id consectetur. Integer malesuada nulla blandit mi tempus
        tempus. Donec aliquet elit eu elementum iaculis. Donec in posuere
        libero. Curabitur at purus nec dui condimentum tempus. Aliquam
        consectetur pretium ipsum, eget interdum orci tincidunt sit amet. Nunc
        ornare sagittis venenatis. Quisque lorem sem, consectetur at placerat
        non, malesuada ut felis. Morbi faucibus congue eros, et venenatis lacus
        consectetur id. Integer malesuada justo ac risus hendrerit, non tempor
        mi eleifend. Quisque at elit nibh.
      </p>
    </Container>
  );
};

export default Sobre;

import React, { useState } from "react";
import { Link } from "react-router-dom";

//styled-components
import { Nav } from "./RightNav.styles";

const RightNav = ({ open }) => {
  return (
    <Nav open={open}>
      <Link to="/">
        <li>Inicio </li>
      </Link>
      <Link to="/contato">
        <li>Contato</li>
      </Link>
      <Link to="/time">
        <li>Nosso Time</li>
      </Link>
      <Link to="/sobre">
        <li>Sobre Nos</li>
      </Link>
      <Link to="/drinks">
        <li>Drinks</li>
      </Link>
    </Nav>
  );
};

export default RightNav;

import React from "react";
import Burger from "../Burguer/Burguer";
import { Nav } from "./Navbar.styles";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <img className="logo" src={Logo} alt="logomarca Drink-se" />
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;

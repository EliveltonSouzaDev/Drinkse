import React, { useState } from "react";
import { StyledBurger } from "./Burguer.styles";
import RightNav from "../RightNav/RightNav";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} onClick={() => setOpen(!open)} />
    </>
  );
};

export default Burger;

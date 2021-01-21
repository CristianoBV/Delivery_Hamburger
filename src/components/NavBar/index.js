import React from "react";
import Logo from "../../assets/logo.png";

import { Nav, NavLink, NavIcon, Bars } from "./styles";

const NarBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default NarBar;

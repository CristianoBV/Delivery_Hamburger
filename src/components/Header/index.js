import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

import { Container, Content, Items, HeaderH1, HeaderP, Btn } from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Content>
        <Items>
          <HeaderH1>Beer meets Burger</HeaderH1>
          <HeaderP>Ready in 60 seconds</HeaderP>
          <Btn>Place Order</Btn>
        </Items>
      </Content>
    </Container>
  );
};

export default Header;

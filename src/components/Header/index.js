import React from "react";
import NavBar from "../NavBar";

import { Container, Content, Items, HeaderH1, HeaderP, Btn } from "./styles";

const Header = () => {
  return (
    <Container>
      <NavBar />
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

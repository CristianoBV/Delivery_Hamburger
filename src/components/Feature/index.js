import React from "react";
import { FaUtensils } from "react-icons/fa";

import { Container, Button } from "./styles";

const Feature = () => {
  return (
    <Container>
      <h1>Conheça nossa linha de doces</h1>
      <p>Feito com 💜</p>
      <Button>
        <FaUtensils />
        <div></div>
        Conheça
      </Button>
    </Container>
  );
};

export default Feature;

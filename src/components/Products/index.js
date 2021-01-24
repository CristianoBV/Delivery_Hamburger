import React from "react";
import { useSelector } from "react-redux";

import { FaPhoneVolume } from "react-icons/fa";

import {
  Container,
  Heading,
  Wrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./styles";

const Products = ({ heading }) => {
  const burger = useSelector((state) => state.data);

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Wrapper>
        {burger.map((burger) => {
          return (
            <ProductCard key={burger}>
              <ProductImg src={burger.img} alt={burger.alt} />
              <ProductInfo>
                <ProductTitle>{burger.name}</ProductTitle>
                <ProductDesc>{burger.desc}</ProductDesc>
                <ProductPrice>{burger.price}</ProductPrice>
                <ProductButton>
                  <FaPhoneVolume />
                  <div></div>
                  {burger.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Products;

import React from "react";

import { FaPhoneVolume } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

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
  flipUp,
} from "./styles";

const ProductsDoces = ({ heading, data }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Wrapper>
        {data.map((product, index) => {
          return (
            // <ScrollAnimation animateIn="fadeIn">
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>
                  <FaPhoneVolume />
                  <div></div>
                  {product.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
            // </ScrollAnimation>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default ProductsDoces;

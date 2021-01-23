import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { darken, shade } from "polished";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  /* background: #150f0f; */
  background: linear-gradient(80deg, #b32244, #500d34);
  color: var(--color-white);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: var(--color-secondary);
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 350px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px var(--color-secondary);
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductTitle = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: var(--color-secondary);
`;

export const ProductButton = styled.button`
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 16px 64px;
  color: #686868;
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  border-radius: 12px;
  background: #fff;
  transition: 0.2s ease-in-out;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.2, "#fff")};
    color: ${shade(2.4, "#686868")};
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;

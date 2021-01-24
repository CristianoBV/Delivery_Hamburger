import styled from "styled-components";
import Doce from "../../assets/doce.jpg";

import { darken, shade } from "polished";

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Doce});
  height: 100vh;
  max-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const Button = styled.button`
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 16px 64px;
  color: var(--color-primary);
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  border-radius: 12px;
  background: #fff;
  transition: 0.2s ease-in-out;

  svg {
    margin-right: 5px;
    color: var(--color-primary);
  }

  &:hover {
    background: ${darken(0.2, "#fff")};
    color: ${shade(2.4, "#f5426c")};
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;

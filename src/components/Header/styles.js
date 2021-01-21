import styled from "styled-components";
import Banner from "../../assets/banner.jpg";
import { darken, shade } from "polished";

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Banner});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0 calc((100vw - 1300px) / 2);
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: var(--color-white);
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeaderH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px var(--color-primary);
  letter-spacing: 3px;
`;

export const HeaderP = styled.p`
  font-size: clamp(2.5rem, 2, 5vw, 3rem);
  margin-bottom: 2rem;
`;

export const Btn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 12px;
  background: var(--color-primary);
  color: var(--color-white);
  transition: 0.2s ease-out;

  &:hover {
    background: ${darken(0.2, "#f5426c")};
    color: ${shade(1.4, "#fff")};
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

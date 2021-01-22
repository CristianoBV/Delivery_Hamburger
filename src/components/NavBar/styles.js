import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { darken } from "polished";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: var(--color-white);
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  > img {
    display: flex;
    position: relative;
    top: 25px;
    width: 190px;
    object-fit: cover;
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;

    > img {
      top: 0;
      width: 80px !important;
    }
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-white);
  transition: 0.2s ease-in-out;
  cursor: pointer;

  svg:hover {
    color: ${darken(0.4, "#fff")};
    transition: 0.2s ease-in-out;
  }

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaHamburger)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

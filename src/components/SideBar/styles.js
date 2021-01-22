import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { darken, shade } from "polished";

export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: linear-gradient(30deg, var(--color-primary), #701a4c);
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--color-white);

  &:hover {
    color: ${darken(0.4, "#fff")};
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--color-white);
  cursor: pointer;

  &:hover {
    color: ${darken(0.4, "#fff")};
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: flex-start;
  position: relative;
`;

export const SideBarRoute = styled(Link)`
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

export const SideBarDelivery = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  align-items: center;
  position: relative;

  > h1 {
    margin-bottom: 20px;
    color: var(--color-white);
    font-size: 2.4rem;
    font-weight: 500;
  }

  > img {
    width: 160px;
    height: auto;
    object-fit: cover;
  }
`;

import React from "react";
import { router } from "../../services/router";
import { FaPhoneVolume } from "react-icons/fa";
import {
  Container,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
  SideBarDelivery,
} from "./styles";

import Delivery from "../../assets/delivery.png";

function SideBar({ isOpen, toggle }) {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        {router.map((item, index) => (
          <SideBarLink to={item.link} key={index}>
            <SideBarLink to="/">{item.title}</SideBarLink>
          </SideBarLink>
        ))}
      </SideBarMenu>
      <SideBarDelivery>
        <h1>Delivery</h1>
        <img src={Delivery} alt="Delivery" />
      </SideBarDelivery>
      <SideBtnWrap>
        <SideBarRoute to="/">
          <FaPhoneVolume />
          <div></div>
          Delivery
        </SideBarRoute>
      </SideBtnWrap>
    </Container>
  );
}

export default SideBar;

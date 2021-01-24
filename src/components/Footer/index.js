import React from "react";
import Logo from "../../assets/logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import {
  Container,
  SocialMedia,
  FooterWrap,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <img src={Logo} alt="Logo" />
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                arial_label="Facebook"
                real="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                arial_label="Instagram"
                real="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                arial_label="Youtube"
                real="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                arial_label="Twitter"
                real="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                arial_label="Linkedin"
                real="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </Container>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../media/logo1.png";

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">
      <img src={logo} style={{  width: "200px", height: "70px", marginTop:12, borderRadius: 10}} alt="Logo of Website" />
      </Link>
    </LogoText>
  );
};

const LogoText = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-style: italic;
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;
export default Logo;

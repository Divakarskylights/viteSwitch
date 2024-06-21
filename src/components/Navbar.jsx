import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(false); // Close the menu after clicking a link
  };

  return (
    <Section id="navbar">
      <Nav>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)} />
        <Menu click={click}>
          <ListItem onClick={() => scrollTo("home")}>Home</ListItem>
          <ListItem onClick={() => scrollTo("about")}>About</ListItem>
          <ListItem onClick={() => scrollTo("roadmap")}>Roadmap</ListItem>
          <ListItem onClick={() => scrollTo("showcase")}>Showcase</ListItem>
          <ListItem onClick={() => scrollTo("team")}>Team</ListItem>
          <ListItem onClick={() => scrollTo("faqs")}>Faqs</ListItem>
          <ListItem className="mobile">
            <Button text="Login / Signup" link="" />
          </ListItem>
        </Menu>
        <div className="desktop">
          <Button text="Login / Signup" link="" />
        </div>
      </Nav>
    </Section>
  );
};

const HamburgerMenu = styled.div`
   width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background-color: ${(props) => props.theme.menuText};
  position: absolute;
  
  
  transform: ${(props) =>
    props.click
      ? `translateX(-50%) rotate(90deg)`
      : `translateX(-50%) rotate(0)`};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: none;

  @media (max-width: 64em) {
    display: flex;
  }

  &::before,
  &::after {
    content: "";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background-color: ${(props) => props.theme.menuText};
    position: absolute;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? `rotate(-40deg)` : `rotate(0)`)};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? `rotate(40deg)` : `rotate(0)`)};
  }
`;

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.bgbody};
  position: fixed; // Fixed position to stay on top
  top: 0;
  left: 0;
  z-index: 10; // Ensure it is above other content
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
  position: relative;
  z-index: 11; // Ensure it is above the Section

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }

    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 11; // Ensure it is above the Section

  @media (max-width: 64em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(2px);
    transform: ${(props) => (props.click ? `translateY(0)` : `translateY(1000%)`)};
    transition: all 0.3s ease;
    touch-action: none;
  }
`;

const ListItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.menuText};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.menuText};
    transition: width 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

export default Navbar;

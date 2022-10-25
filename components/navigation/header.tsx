import React, { useState } from "react";
import styled from "styled-components";
import Images from "../../utils/images";
import { useRouter } from "next/router";
import SearchBox from "../search";
import Link from "next/link";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:2rem;
  z-index:3;

  @media (min-width: 768px) {
    .header-right {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }
  }
 
`;

const Logo = styled.div`
  width: 4rem;
  height: 100%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const NavLink = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span<{ open: boolean }>`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "30%" : "60%")};
  }

  :nth-child(3) {
    width:  ${(props) => (props.open ? "70%" : "30%")};;
  }
`;

const Overlay = styled.div<{ open: boolean }>`
  position: absolute;
  height: ${(props) => (props.open ? "100vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  z-index: 2;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul<{ open: boolean }>`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

interface LinkProps {
  pathname: string;
  href: string;
}
const links: LinkProps[] = [
  { pathname: "Overview", href: "/" },
  { pathname: "NFTS", href: "/nfts" },
  { pathname: "Deep Dive", href: "/deep-dive" },
];

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  const router = useRouter();
  return (
    <>
      <Nav>
        <div className="header-right">
        <Logo>
          <Link href="/">
            <img src={Images.logoIcon} alt="logo-icon" />
          </Link>
        </Logo>
        <Menu>
          {links.map((link: LinkProps) => (
            <Item key={link.href}>
              <Link href={link.href} passHref >
                <NavLink
                  className={
                    router.pathname === link.href ? "active" : "non-active"
                  }
                >
                  {link.pathname}
                </NavLink>
              </Link>
            </Item>
          ))}
        </Menu>
        </div>
        <SearchBox />
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          {links.map((link: LinkProps) => (
            <Item onClick={()=>toggleNav(false)} key={link.href}>
              <Link href={link.href} passHref >
                <NavLink
                  className={
                    router.pathname === link.href ? "active" : "non-active"
                  }
                >
                  {link.pathname}
                </NavLink>
              </Link>
            </Item>
          ))}
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;

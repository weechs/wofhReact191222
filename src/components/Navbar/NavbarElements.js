import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { TbChristmasTree } from "react-icons/tb";
// import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(0,0,0,0.95)" : "transparent"};
  transition: 0.6s all ease-in-out;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 998;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 14px;
  font-family: var(--font-base);
  font-weight: bold;
  text-decoration: none;

  & img {
    width: 150px;

    @media screen and (max-width: 768px) {
      width: 110px;
    }
  }

  &:hover {
    filter: brightness(110%);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    &:hover {
      color: var(--color-xmas);
      filter: brightness(110%);
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: auto 20px;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: var(--color-xmas);
    /* color: var(--color-darkpink); */
    padding-top: 2px;
    border-bottom: 4px solid var(--color-xmas);
  }

  &.active {
    border-bottom: 2px solid var(--color-xmas);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 10px;
  white-space: nowrap;
  padding: 5px 5px;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  & img {
    width: 30px;
    height: auto;
  }

  a {
    &:hover {
      filter: brightness(120%);
      padding-bottom: 30px;
      border-bottom: 2px solid var(--color-xmas);
    }
  }
`;

export const ChristmasTree = styled(TbChristmasTree)`
  margin-left: 2px;
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    color: var(--color-xmas);
  }
`;

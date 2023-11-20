import { BsXLg } from "react-icons/bs";
import styled, { css } from "styled-components";

export const Navbar = styled.nav`
  -webkit-box-shadow: 0px 4px 5px -5px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0px 4px 5px -5px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 4px 5px -5px rgba(0, 0, 0, 0.23);
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.sticky ? "8rem" : "12rem")};
  transition: height 0.1s linear;
`;

export const LogoImg = styled.img`
  width: 8.5rem;
  height: auto;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  font-size: 1.8rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 600px) {
    display: none;
  }

  a {
    color: #000000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  i {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const PageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000075;
    z-index: 888;
    transition: all 0.3s ease-in;
    display: ${(props) => (props.cart ? "flex" : "none")};
`;

export const CartDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    padding: 3rem 2.5rem 1.5rem 2.5rem;
    background-color: white;
    height: 100vh;
    width: 50rem;
    transition: all 0.4s ease;
    right: ${(props) => (props.cart ? "0" : "-100%")};
`;

export const CartTitleBtn = styled.div`
    font-size: 1.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 2.1rem !important;
    }

    i {
      font-size: 2.5rem;
      cursor: pointer;
    }
`;

export const CartBody = styled.div`
    height: 100vh;
    padding: 0.5rem;
`;

export const NavMobile = styled.nav`
  background-color: #f3f3f3;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.mobileNav ? "flex" : "none")};
`;

export const IconX = styled(BsXLg)`
  font-size: 2.3rem;
  position: absolute;
  right: 3rem;
  top: 3rem;
  cursor: pointer;
`;

export const MobileLinks = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  top: 44%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  a {
    color: black;
    text-decoration: none;

    a:hover {
      text-decoration: underline;
    }
  }
`;

export const HamburguerMenu = styled.div`
  display: none;
  gap: 3rem;

  @media (max-width: 600px) {
    display: flex;
  }

  i {
    font-size: 2.3rem;
    display: none;
    cursor: pointer;

    @media (max-width: 600px) {
      display: flex;
    }
  }
`;

export const IconCart = styled.i`
   position: relative;
   cursor: pointer;

   &::after {
    content: '';
    top: -18px;
    position: absolute;
    left: 12px;
    font-size: 11px;
    background-color: #B6002C;
    color: white;
    padding: 5px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    text-align: center;
    display: none;
  }

  ${({ withItems }) => withItems && css`
    &::after {
      content: attr(data-array-length);
      top: -18px;
      position: absolute;
      left: 12px;
      font-size: 13px;
      background-color: #B6002C;
      color: white;
      padding: 5px;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      text-align: center;
      display: flex;
      align-items: center;
      z-index: 999;
    }
  `}
`;

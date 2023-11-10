import { BsXLg } from "react-icons/bs";
import styled from "styled-components";

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
  gap: 2.5rem;

  @media (max-width:600px) {
    display: none;
  }

  a {
    color: #000000;
    text-decoration: none;

    a:hover {
      text-decoration: underline;
    }
  }

  i {
    cursor: pointer;
  }
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
  font-size: 3rem;
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

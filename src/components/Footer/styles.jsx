import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 17rem;
  background-color: black;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 3rem;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.8rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;

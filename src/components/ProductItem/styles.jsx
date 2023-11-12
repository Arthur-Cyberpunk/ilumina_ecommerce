import { Link } from "react-router-dom";
import styled from "styled-components";

export const Product = styled.div`
  outline: 2px solid rgba(0, 0, 0, 0.205);
  outline-offset: -2px;
  transition: all 0.15s ease-in;
  cursor: pointer;

  div:hover {
    outline: 2px solid rgba(0, 0, 0, 0.7);
  }
`;

export const LinkProduct = styled(Link)`
  text-decoration: none;
`;

export const InfoProduct = styled.div`
  font-size: 1.8rem;
  padding: 1rem;

  img {
    width: 100%;
  }

  p {
    color: black;
  }
`;

export const ItemPrice = styled.p`
  font-weight: 600;
  font-size: 2.2rem;
  margin-top: 1.4rem;
`;

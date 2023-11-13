import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProudContainer = styled.div`
  padding: 11rem 0;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

export const RowItem = styled.div`
  outline: 2px solid rgba(0, 0, 0, 0.205);
  cursor: pointer;
  transition: all 0.15s ease-in;

  div:hover {
    outline: 2px solid rgba(0, 0, 0, 0.6);
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

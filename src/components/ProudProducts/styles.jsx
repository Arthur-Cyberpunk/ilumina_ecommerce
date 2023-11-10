import styled from "styled-components";

export const Section = styled.section`
  padding: 11rem 0;
`;

export const H2 = styled.h2`
  font-size: 2.6rem;
  font-weight: 600;
  margin-bottom: 4.2rem !important;
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

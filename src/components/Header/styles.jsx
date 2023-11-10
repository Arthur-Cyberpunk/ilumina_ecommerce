import styled from "styled-components";

export const Section = styled.section`
  padding-top: 12rem;
`;

export const GridContainer = styled.div`
  display: grid;
  height: 50rem;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "one four" "one four-low";
  gap: 1.3rem;
  margin-top: 1.3rem;

  .grid-one {
    grid-area: one;
  }

  .grid-four {
    grid-area: four;
  }

  .grid-four-low {
    grid-area: four-low;
  }

  @media (max-width: 750px) {
    height: 500px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "one"
      "four four-low";
    grid-gap: 13px;
    gap: 13px;
  }
`;

export const Featured = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;

  div:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const Description = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
  font-size: 3.8rem;
  font-weight: 600;

  @media (max-width: 450px) {
    bottom: 1rem;
    left: 1rem;
    font-size: 3rem;
  }

  @media (max-width: 400px) {
    bottom: 1rem;
    left: 0.5rem;
    font-size: 2.5rem;
  }
`;

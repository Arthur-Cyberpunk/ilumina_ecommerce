import styled from "styled-components";

export const Banner = styled.section`
  padding-bottom: 10rem;
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40rem;
  overflow: hidden;
  flex-direction: row-reverse;
`;

export const TextSide = styled.div`
  width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 11rem;
  background-color: #e9e9e9;

  @media (max-width: 750px) {
    padding: 0 4rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.6rem;
  }

  a {
    button {
      background-color: black;
      color: white;
      font-size: 1.7rem;
      font-weight: bold;
      padding: 1rem;
      text-transform: uppercase;
      margin-top: 2rem;
      cursor: pointer;
      border: 2px solid black;
      transition: all 0.15s;
    }

    button:hover {
      background-color: transparent;
      color: black;
    }
  }
`;

export const ImageSide = styled.div`
  width: 50%;
  text-align: end;
  background-color: #e9e9e9;

  @media (max-width: 600px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

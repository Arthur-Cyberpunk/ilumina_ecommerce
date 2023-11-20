import styled, { keyframes } from "styled-components";

const slidein = keyframes`
  0% {
    top: -100%;
  }

  40% {
    top: 90px;
  }

  60% {
    top: 90px;
  }

  100% {
    top: -100%;
  }
`;

export const Notify = styled.div`
  color: white;
  background-color: #373737;
  padding: 1.2rem 2.2rem;
  z-index: 999999999;
  font-size: 2rem;
  position: absolute;
  transform: translate(-50%);
  top: -100%;
  left: 50%;

  &.slide-in {
    animation-duration: 4s;
    animation-delay: -1s;
    animation-name: ${slidein};
    animation-direction: alternate;
    animation-fill-mode: forwards;
  }
`;

export const ProductPage = styled.div`
  padding-top: 14rem;
`;

export const ProductDiv = styled.div`
  margin-bottom: 10rem;
  width: 100%;
  display: flex;
  position: relative;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-bottom: 6rem;
  }
`;

export const BigName = styled.h3`
  position: absolute;
  font-size: 3.5rem;
  top: 8px;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 850px) {
    width: 31rem;
    text-align: center;
  }
`;

export const ProductLeft = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 5rem;

  @media (max-width: 850px) {
    .product-left {
      width: 100%;
    }
  }
`;

export const BigImg = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  margin-left: 1rem;

  @media (max-width: 850px) {
    margin: 6rem 0 0 1rem;
  }

  img {
    width: 75%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SmallImgs = styled.div`
  width: 100%;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;

  img {
    width: 22%;
    height: 20%;
    object-fit: cover;
    cursor: pointer;
  }

  img:hover {
    outline: 1px solid rgba(0, 0, 0, 0.3);

    -webkit-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.18);
  }
`;

export const ProductRight = styled.div`
  width: 50%;
  height: 100%;
  background-color: #e5e5e5;
  padding: 16rem 5rem 8rem 5rem;

  @media (max-width: 900px) {
    padding: 16rem 2rem 8rem 2rem;
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 3rem 2rem 4rem 2rem;
  }
`;

export const ProductSpec = styled.p`
  font-size: 2rem;
  margin-bottom: 5rem;
  line-height: 1.5;

  @media (max-width: 450px) {
    .product-spec {
      margin-bottom: 2rem;
    }
  }
`;

export const ProductQuant = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  font-weight: 600;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ProductBtns = styled.div`
  display: flex;
  border: 1px solid black;

  button {
    font-size: 3rem;
    width: 5.5rem;
    height: 5.5rem;
    color: black;
    cursor: pointer;
    background-color: white;
    border: none;
    transition: all 0.2s;
  }

  button:first-child {
    border-right: 1px solid black;
  }

  button:last-child {
    border-left: 1px solid black;
  }

  button:hover {
    background-color: transparent;
  }

  p {
    outline-offset: -2px;
    width: 6rem;
    height: 5rem;
    text-align: center;
    padding-top: 10px;
  }
`;

export const AtcBuy = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 450px) {
    gap: 2rem;
    width: 100%;
    flex-direction: column;
  }

  button {
    width: 50%;
    height: 5.5rem;
    border: none;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;

    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;

export const AtcBtn = styled.button`
  background-color: transparent;
  border: 2px solid black !important;
`;

export const BuyBtn = styled.button`
  background-color: #b6002c;
  color: white;
  border: 2px solid #b6002c !important;
`;

export const Specifications = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  margin-bottom: 10rem;

  @media (max-width: 570px) {
    gap: 2rem;
    flex-direction: column;
    margin-bottom: 28rem;
  }
`;

export const Spec = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

export const SpecTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
`;

export const TitleName = styled.p`
  font-size: 1.65rem;
`;

import styled, { css } from "styled-components";

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

  ${(props) =>
    props.adicionarAnimacao &&
    css`
      animation-duration: 4s;
      animation-delay: -1s;
      animation-name: slidein;
      animation-direction: alternate;
      animation-fill-mode: forwards;
    `}
`;

export const ProductPage = styled.div`
  padding-top: 14rem;
`;

export const ProductDiv = styled.div`
  margin-bottom: 10rem;
  width: 100%;
  display: flex;
  position: relative;
`;

export const BigName = styled.h3`
    position: absolute;
    font-size: 3.5rem;
    top: 8px;
    left: 50%;
    transform: translate(-50%);
`;

export const ProductLeft = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 5rem;
`;

export const BigImg = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    margin-left: 1rem;

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
    background-color: #E5E5E5;
    padding: 16rem 5rem 8rem 5rem;
`;

export const ProductSpec = styled.p`
    font-size: 2rem;
    margin-bottom: 5rem;
    line-height: 1.5;
`;

export const ProductQuant = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  font-weight: 600;
  align-items: center;
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

  button {
    width: 50%;
    height: 5.5rem;
    border: none;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
  }
`;

export const AtcBtn = styled.button`
  background-color: transparent;
  border: 2px solid black !important;

  hover {
    color: white;
    background-color: black;
  }
`;

export const BuyBtn = styled.button`
  background-color: #b6002c;
  color: white;
  border: 2px solid #b6002c !important;

  button:hover {
    background-color: transparent;
    color: #b6002c;
  }
`;

export const Specifications = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  margin-bottom: 10rem;
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

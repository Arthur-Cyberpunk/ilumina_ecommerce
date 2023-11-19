import styled from "styled-components";

export const FullCartDiv = styled.div`
  overflow-y: scroll;
  padding: 5px;
  height: 70%;
  margin-top: 2rem;
  margin-right: -0.5rem;
`;

export const FullCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Subtotal = styled.div`
  display: flex;
  width: 100%;
  height: 12rem;
  border-top: 2px dashed black;
  margin-top: 1.5rem;
  padding: 1rem 0;
  justify-content: space-between;
`;

export const SubRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 2.5rem;
    font-weight: 600;
`;

export const SubLeft = styled.div`
  padding-top: 4rem;

  a {
    font-size: 2rem;
    color: black;
    border: 2px solid black;
    text-decoration: none;
    background-color: transparent;
    padding: 1rem 3.5rem;
    transition: all 0.2s;
  }

  a:hover {
    background-color: #000000;
    color: white;
  }
`;

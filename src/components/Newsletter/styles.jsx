import styled from "styled-components";

export const News = styled.section`
  background-color: #191919;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewsText = styled.div`
  text-align: center;

  h2 {
    color: white;
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    font-size: 1.7rem;
    padding: 0.7rem;
    margin-right: 0.7rem;
    border: none;
    outline: none;

    @media (max-width: 400px) {
      margin-right: 0;
      text-align: center;
    }
  }

  button {
    font-size: 1.7rem;
    padding: 0.7rem;
    border: none;
    cursor: pointer;
  }
`;

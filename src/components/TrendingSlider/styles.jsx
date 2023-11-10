import styled from "styled-components";

export const Trending = styled.section`
    padding-bottom: 10rem;
`;

export const Title = styled.div`
        display: flex;
    justify-content: space-between;

    h3 {
        font-size: 2.6rem;
    font-weight: 600;
    margin-bottom: 4.2rem !important;
    }
`;

export const ButtonsBox = styled.div`
        display: flex;
    gap: .4rem;

    button {
    color: white;
    background-color: #373737;
    padding: 1rem;
    font-size: 1.5rem;
    border: none;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    transition: all 0.1s ease-in;

    button:hover {
    background-color: black;
}
}
`;


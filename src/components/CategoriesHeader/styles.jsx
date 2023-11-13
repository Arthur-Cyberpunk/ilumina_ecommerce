import styled from "styled-components";

export const CategoHeader = styled.div`
    padding-top: 17rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -4rem;
`;

export const TitleHome = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 6rem;

    a {
    font-size: 1.6rem;
    text-decoration: none;
    color: black;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    h3 {
    font-size: 2.7rem;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
    }
`;

export const FilterBtns = styled.div`
    justify-content: center;
    display: flex;
    gap: 1rem;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;

    button {
    padding: .6rem 1.6rem;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
}

button:hover {
    border: 2px solid rgba(0, 0, 0, 0.5);
}
`;

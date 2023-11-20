import { BsXLg } from "react-icons/bs";
import styled from "styled-components";

export const CartItem = styled.div`
    width: 100%;
    height: 15rem;
    display: grid;
    grid-template-columns: 30fr 50fr 20fr;
    border: 1px solid #717171;
    border-radius: 3px;
    background-color: #f2f2f2;

    @media (max-width:420px) {
        grid-template-columns: 1fr;
        height: 100%;
        width: 90%;
    }
`;

export const CartImg = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;

    @media (max-width:420px) {
        width: 80%;
        transform: translate(10%);
    }
}
`;

export const CartMiddle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;

    @media (max-width:420px) {
        align-items: center;
        gap: 2rem;
    }
`;

export const CartName = styled.p`
    font-size: 2.4rem;
`;

export const CartBtns = styled.div`
    display: flex;

    button {
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: black;
    color: white;
    cursor: pointer;
}

p {
    font-size: 2rem;
    outline: 2px solid black;
    outline-offset: -2px;
    width: 3rem;
    text-align: center;
    padding-top: 3.5px;
}
`;

export const CartRight = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: space-between;
    padding: 1.5rem;
    font-size: 2.4rem;
    font-weight: 600;

    @media (max-width:420px) {
        text-align: center;
        flex-direction: row;
    }
`;

export const IconX = styled(BsXLg)`
    cursor: pointer;
`;

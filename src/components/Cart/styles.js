import styled from "styled-components";

export const Card = styled.li`
    display: flex;
    align-items: flex-start;
    color: black;
    border-bottom: 1px solid gray;
    width: 100%;
    padding-bottom: 15px;
    position: relative;

    & > *:not(:last-child) {
        margin-right: 15px;
    }

    &:hover button {
        transform: scaleX(1) translateY(-50%);
    }

    input {
        border: 1px solid gray;
        width: 100px;
        padding: 5px 0 5px 5px;
        border-radius: 5px;
    }

    p {
        font-size: 0.8rem;
        flex: 1;
    }
`;

export const List = styled.ul`
    display: grid;
    gap: 1rem;
    justify-items: center;
    text-align: center;
    align-content: start;
    padding: 1rem;
    max-height: 120vh;
    overflow: auto;

    h3 {
        color: var(--orange);
        text-transform: uppercase;
        letter-spacing: 2px;
        transform: skewX(-10deg);
    }
`;

export const Delete = styled.button`
    background: var(--bg-gradient);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 0;

    width: 1.5rem;
    height: 1.5rem;
    margin-left: 10px;
    transform: scaleX(0) translateY(-50%);
    transform-origin: right;
    svg {
        width: 25px;
        height: 25px;
        fill: white;
    }
`;

import styled from "styled-components";

export const Recipe = styled.div`
    display: grid;
    grid-template-rows: 40vh auto auto;
    border-right: 1px solid gray;
    align-content: start;
`;

export const RecipeHead = styled.div`
    position: relative;
    &::before {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
        opacity: 0.6;
        z-index: 1;
    }
`;

export const RecipeImg = styled.img`
    position: absolute;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
`;

export const RecipeName = styled.h2`
    width: 70%;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 20%) skewY(-6deg);
    color: white;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5rem;
    z-index: 2;

    span {
        background: var(--bg-gradient);
        box-decoration-break: clone;
        padding: 0.6rem 1.5rem;
        line-height: 2;
    }
`;

export const Mini = styled.ul`
    display: flex;
    padding: 3rem 1rem;
    align-items: center;
    background: #eee;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin-right:1.5rem;

    svg {
        margin-right: 10px;
        width: 25px;
        height: 25px;
        fill: var(--orange);
    }
`;

export const Like = styled.button`
    background: var(--bg-gradient);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-left:auto;

    &:hover {
        transform: scale(1.1);
    }

    svg {
        width: 2rem;
        height: 2rem;
        fill: white;
    }
`;

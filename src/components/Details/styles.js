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
    background: var(--gray-1);
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin-right: 1.5rem;

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
    margin-left: auto;

    &:hover {
        transform: scale(1.1);
    }

    svg {
        width: 2rem;
        height: 2rem;
        fill: white;
    }
`;

export const ServingBtn = styled(Like)`
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 10px;
    svg {
        width: 25px;
        height: 25px;
    }
`;

export const MinusBtn = styled(ServingBtn)`
    pointer-events: ${({ servings }) => (servings === 1 ? "none" : "all")};
    opacity: ${({ servings }) => (servings === 1 ? "0" : "1")};
`;

export const Button = styled(Like)`
    background: var(--bg-gradient);
    padding: 0.5em 2em;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    width: auto;
    height: auto;
    border-radius: 3rem;
    margin: auto;
    display: flex;
    align-items: center;

    svg {
        margin-right: 10px;
    }
`;

export const HowTo = styled.div`
    display: grid;
    justify-items: center;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem 0;
    background: var(--gray-1);
`;

export const Note = styled.p`
    width: 80%;
    font-size: 0.9rem;
    margin: auto;
    margin-bottom: 1rem;

    span{
        font-weight:bold;
    }
`;

export const Title = styled.h3`
    color: var(--orange);
    font-style: italic;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 300;
`;

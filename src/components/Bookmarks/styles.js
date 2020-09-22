import styled from "styled-components";

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
        width: 1.5rem;
        height: 1.5rem;
        fill: white;
    }
`;

export const BookmarksBody = styled.div`
    position: relative;
`;

export const List = styled.ul`
    position: absolute;
    background: white;
    right: 0;
    top: 20%;
    z-index: 4;
    box-shadow: 0 0 1rem rgba(black, 0.8);
    transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(0)")};
    transform-origin:top right;

    h2 {
        text-align: center;
        padding: 0.5rem;
        font-size: 1.2rem;
        color: var(--orange);
    }
`;

export const Card = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    width: 300px;

    &:hover {
        background: var(--gray-1);
    }

    h4 {
        text-transform: uppercase;
    }

    img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-right: 10px;
    }
`;

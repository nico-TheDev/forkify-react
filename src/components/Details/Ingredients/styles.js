import styled from "styled-components";

export const List = styled.ul`
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    background:var(--gray-2)
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns:auto 1fr;
    align-items: start;
    gap:10px;

    svg {
        margin-top:3px;
        width: 20px;
        height: 20px;
        fill: var(--orange);    }
`;

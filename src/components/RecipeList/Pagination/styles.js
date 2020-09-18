import styled from "styled-components";

export const PageHandler = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
`;

const NaviBtn = styled.button`
    background: var(--bg-gradient);
    display: grid;
    place-items: center;
    padding: 0.5rem 1.5rem;
    border-radius: 5rem;

    &:hover {
        transform: scale(1.1);
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: white;
    }
`;

export const PrevBtn = styled(NaviBtn)`
    visibility: ${({ page }) => (page === 1 ? "hidden" : "visible")};
`;
export const NextBtn = styled(NaviBtn)`
    visibility: ${({ isMax }) => (isMax ? "visible" : "hidden")};
`;

export const PageNumber = styled.p`
    text-align: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--orange);
`;

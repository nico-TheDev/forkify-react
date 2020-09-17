import styled from "styled-components";
import Container from "components/shared/Container";

export const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    height: 12vh;
    padding: 1rem 2rem;
    background: #eeeeee;
    justify-content:space-between;
`;

export const Logo = styled.h2`
    font-family: "Dancing Script", cursive;
    display: flex;
    align-items: center;
`;

export const IconLogo = styled.span`
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: var(--bg-gradient);
    margin-right: 10px;
    svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: white;
    }
`;

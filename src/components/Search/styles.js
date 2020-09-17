import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 450px;
`;

export const Input = styled.input`
    flex: 1;
    max-width: 90%;
    padding: 0.6rem 1.5rem;
    border-radius: 5rem;
    font-size: 1rem;
    border:2px solid transparent;
    &:active,
    &:focus {
        outline: none;
        border-color: var(--orange);
    }
`;

export const Button = styled.button`
    background: var(--bg-gradient);
    padding: 0.8rem 1.5rem;
    border-radius: 4rem;
    font-size: 1.1rem;
    color: white;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);

    &:hover {
        transform: translateY(-50%) scale(1.1);
    }
    svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 10px;
    }
`;

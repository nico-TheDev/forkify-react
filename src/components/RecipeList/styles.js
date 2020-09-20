import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    gap: 0.5rem;
    padding: 10px 0;
    border:1px solid gray;
    min-height:88vh;
    align-items:center;
`;

export const NoRecipes = styled.li`
    display: grid;
    text-align: center;
    gap: 10px;
    font-size:1.2rem;
    font-weight:bold;
    padding:0.5rem;
    span {
        font-size: 2.5rem;
    }
`;


export const QueryLink = styled.a`
    color:var(--orange);

    &:hover{
        text-decoration:underline;
    }
`
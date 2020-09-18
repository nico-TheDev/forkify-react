import styled from "styled-components";

export const Card = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem;
    &:hover{
        background:#eee;
    }
`;
export const CardImg = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right:10px;
`;

export const Name = styled.h4`
    color: var(--orange);
    text-transform: uppercase;
    line-height: 1.4 ;
    font-weight:400;
    span {
        display: block;
        color: black;
        font-size:0.9rem;
    }
`;

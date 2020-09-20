import React from "react";
import styled, { keyframes } from "styled-components";

import getIcon from "util/getIcon";

const spin = keyframes`
    from {
        transform:rotate(0)
    }
    to {
        transform:rotate(360deg)
    }
`;

const Spinner = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    svg {
        fill: var(--orange);
        width: 3rem;
        height: 3rem;
        animation: ${spin} 500ms ease infinite;
    }
`;

export default function Loader() {
    return (
        <Spinner>
            <svg>
                <use href={getIcon("loop")} />
            </svg>
        </Spinner>
    );
}

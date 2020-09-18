import React, { useState } from "react";

import { useApp } from "contexts/AppContext";
import getIcon from "util/getIcon";
import { PageHandler, NextBtn, PrevBtn, PageNumber } from "./styles";
import ActionTypes from "ActionTypes";

export default function Pagination() {
    const { state, dispatch } = useApp();
    let [page, setPage] = useState(1);

    const handleNext = () => {
        setPage((page += 1));
        console.log(page);
        dispatch({ type: ActionTypes.NEXT_PAGE, page });
        window.scrollTo(0,0);
    };

    const handlePrev = () => {
        setPage((page -= 1));
        console.log(page);
        dispatch({ type: ActionTypes.NEXT_PAGE, page });
        window.scrollTo(0,0);
    };

    return (
        <PageHandler>
            <PrevBtn onClick={handlePrev} page={page}>
                <svg>
                    <use href={getIcon("arrow-left")} />
                </svg>
            </PrevBtn>

            <PageNumber>Page {page}</PageNumber>

            <NextBtn
                onClick={handleNext}
                isMax={(page < Math.ceil(state.recipes.length / 10))}
            >
                <svg>
                    <use href={getIcon("arrow-right")} />
                </svg>
            </NextBtn>
        </PageHandler>
    );
}

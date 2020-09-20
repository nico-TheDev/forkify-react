import React, { useState, useEffect } from "react";

import { useApp } from "contexts/AppContext";
import getIcon from "util/getIcon";
import {
    Recipe,
    RecipeHead,
    RecipeImg,
    RecipeName,
    Mini,
    Item,
    Like
} from "./styles";
import ActionTypes from "ActionTypes";
import decodeText from "util/decodeText";
import Loader from "components/shared/Loader";

export default function Details({ match, location }) {
    const { id } = match.params;
    const { state, dispatch } = useApp();
    const { currentRecipe } = state;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
                .then((res) => res.json())
                .then((data) => {
                    dispatch({
                        type: ActionTypes.GET_RECIPE_DETAIL,
                        recipe: data.recipe,
                    });
                })
                .catch((err) => console.error(err))
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [location.pathname, id,dispatch]);

    if (isLoading && !currentRecipe) {
        return <Loader/>;
    }

    return (
        <Recipe>
            <RecipeHead>
                <RecipeImg
                    src={currentRecipe?.image_url}
                    alt="recipe photo"
                />
                <RecipeName>
                    <span>{decodeText(currentRecipe?.title)}</span>
                </RecipeName>
            </RecipeHead>

            <Mini>
                <Item>
                    <svg>
                        <use href={getIcon("timer")} />
                    </svg>
                    60 Minutes
                </Item>
                <Item>
                    <svg>
                        <use href={getIcon("person")} />
                    </svg>
                    4 Servings
                </Item>
                <Like>
                    <svg>
                        <use href={getIcon("heart-outlined")} />
                    </svg>
                </Like>
            </Mini>
        </Recipe>
    );
}

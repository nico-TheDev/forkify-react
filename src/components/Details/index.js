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
    Like,
    Button,
    HowTo,
    Title,
} from "./styles";
import ActionTypes from "ActionTypes";
import decodeText from "util/decodeText";
import Loader from "components/shared/Loader";
import Ingredients from "./Ingredients";

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
    }, [location.pathname, id, dispatch]);

    if (isLoading && !currentRecipe) {
        return <Loader />;
    }

    return (
        <Recipe>
            <RecipeHead>
                <RecipeImg src={currentRecipe?.image_url} alt="recipe photo" />
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
                    1 Servings
                </Item>
                <Like>
                    <svg>
                        <use href={getIcon("heart-outlined")} />
                    </svg>
                </Like>
            </Mini>
            <Ingredients />
            <HowTo>
            <Button>
                <svg>
                    <use href={getIcon("cart")} />
                </svg>
                Add To Shopping Cart
            </Button>
                <Title>How To Cook</Title>
                <Button
                    as="a"
                    href={currentRecipe?.source_url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg>
                        <use href={getIcon("bookmark")} />
                    </svg>
                    Directions
                </Button>
            </HowTo>
        </Recipe>
    );
}

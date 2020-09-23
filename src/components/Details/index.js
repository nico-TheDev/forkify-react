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
    ServingBtn,
    MinusBtn,
    Note,
} from "./styles";
import ActionTypes from "ActionTypes";
import decodeText from "util/decodeText";
import Loader from "components/shared/Loader";
import Ingredients from "./Ingredients";

const generateTime = (count) => {
    if (count <= 5) return 30;
    else if (count > 5 && count <= 12) return 45;
    else if (count > 12 && count <= 16) return 60;
    else if (count > 16 && count <= 22) return 90;
    else {
        return 180;
    }
};

export default function Details({ match, location, history }) {
    const { id } = match.params;
    const [isLoading, setIsLoading] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    let [numOfServings, setNumOfServings] = useState(1);
    const { state, dispatch } = useApp();
    const { currentRecipe } = state;

    useEffect(() => {
        setNumOfServings(1);
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
                .catch(() => history.push("/"))
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [location.pathname, id, dispatch]);

    useEffect(() => {
        const savedID = state.savedRecipes.map((item) => item.recipe_id);
        if (savedID.includes(currentRecipe?.recipe_id)) {
            setIsBookmarked(true);
        } else {
            setIsBookmarked(false);
        }
    }, [state.currentRecipe, state.savedRecipes, id]);

    const handleLike = () => {
        dispatch({ type: ActionTypes.BOOKMARK_RECIPE, recipe: currentRecipe });
    };

    const addServings = () => {
        setNumOfServings((numOfServings += 1));
        dispatch({
            type: ActionTypes.MULTIPLY_INGREDIENTS,
            servings: numOfServings,
        });
    };
    const subtractServings = () => {
        setNumOfServings((numOfServings -= 1));
        dispatch({
            type: ActionTypes.MULTIPLY_INGREDIENTS,
            servings: numOfServings,
        });
    };

    const addToCart = () =>
        dispatch({
            type: ActionTypes.ADD_TO_CART,
            cart: currentRecipe.ingredients,
        });

    if (isLoading || !currentRecipe) {
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
                    {generateTime(currentRecipe.ingredients.length)} Minutes
                </Item>
                <Item>
                    <svg>
                        <use href={getIcon("person")} />
                    </svg>
                    {numOfServings} Serving{numOfServings === 1 ? "" : "s"}
                    <MinusBtn
                        servings={numOfServings}
                        onClick={subtractServings}
                    >
                        <svg>
                            <use href={getIcon("minus")} />
                        </svg>
                    </MinusBtn>
                    <ServingBtn onClick={addServings}>
                        <svg>
                            <use href={getIcon("plus")} />
                        </svg>
                    </ServingBtn>
                </Item>
                <Like onClick={handleLike}>
                    <svg>
                        <use
                            href={getIcon(
                                isBookmarked ? "heart" : "heart-outlined"
                            )}
                        />
                    </svg>
                </Like>
            </Mini>
            <Ingredients />
            <HowTo>
                <Button onClick={addToCart}>
                    <svg>
                        <use href={getIcon("cart")} />
                    </svg>
                    Add To Shopping Cart
                </Button>
                <Title>How To Cook</Title>
                <Note>
                    The recipe was carefully designed and created by{" "}
                    <span>{currentRecipe?.publisher}</span>. Please check out
                    their sites.
                </Note>
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

import React, { useState } from "react";

import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";
import { useApp } from "contexts/AppContext";
import { List, NoRecipes, QueryLink } from "./styles";
import Loader from "components/shared/Loader";

export default function RecipeList() {
    const { state } = useApp();
    const { recipes, recipeList, isLoading,currentRecipe } = state;

    if ((isLoading && !recipes && !currentRecipe) || (isLoading && currentRecipe)) {
        return <Loader />;
    }

    if (!isLoading && recipes === undefined) {
        return (
            <List>
                <NoRecipes>
                    <span role="img">😭</span>No Recipes Found
                    <QueryLink
                        href="https://forkify-api.herokuapp.com/phrases.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Query List
                    </QueryLink>
                </NoRecipes>
            </List>
        );
    }

    if (!isLoading && Array.isArray(recipes)) {
        return (
            <div>
                <List>
                    {recipeList.map((recipe) => (
                        <RecipeCard details={recipe} key={recipe.recipe_id} />
                    ))}
                </List>
                <Pagination />
            </div>
        );
    }

    return (
        <List>
            <NoRecipes>
                <span role="img">😥</span>No Recipes Yet
            </NoRecipes>
        </List>
    );
}

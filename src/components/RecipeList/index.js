import React, { useState } from "react";

import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";
import { useApp } from "contexts/AppContext";
import { List, NoRecipes } from "./styles";

export default function RecipeList() {
    const { state } = useApp();
    const { recipes, recipeList } = state;
    return (
        <div>
            <List>
                {recipes ? (
                    recipeList.map((recipe) => (
                        <RecipeCard details={recipe} key={recipe.recipe_id} />
                    ))
                ) : (
                    <NoRecipes> <span role='img'>😥</span>No Recipes Yet</NoRecipes>
                )}
            </List>
            {recipes && <Pagination />}
        </div>
    );
}

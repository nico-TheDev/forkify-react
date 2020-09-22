import React from "react";
import { Link } from "react-router-dom";
import cutText from "util/cutText";
import { Card } from "./styles";

export default function BookMarkCard({ recipe }) {
    return (
        <Link to={`/recipe/${recipe.recipe_id}`}>
            <Card>
                <img src={recipe.image_url} alt={recipe.title} />

                <h4>{cutText(recipe.title)}</h4>
            </Card>
        </Link>
    );
}

import React from "react";
import { NavLink } from "react-router-dom";
import cutText from "util/cutText";
import { Card, CardImg, Name } from "./styles";

export default function RecipeCard({ details }) {
    return (
        <NavLink to={`/recipe/${details.recipe_id}`}>
            <Card>
                <CardImg
                    src={details.image_url}
                    alt={`${details.title} Recipe Photo`}
                />

                <Name>
                    {cutText(details.title)}
                    <span>{details.publisher}</span>
                </Name>
            </Card>
        </NavLink>
    );
}

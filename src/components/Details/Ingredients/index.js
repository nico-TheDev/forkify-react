import React from "react";
import { List, Item } from "./styles";
import { useApp } from "contexts/AppContext";
import getIcon from "util/getIcon";
import formatCount from "util/formatCount";

export default function Ingredients() {
    const { state } = useApp();
    const { currentRecipe } = state;
    return (
        <List>
            {currentRecipe?.ingredients.map((item, i) => (
                <Item key={i}>
                    <svg>
                        <use href={getIcon("check")} />
                    </svg>
                    {`${formatCount(item.total)} ${item.unit || ""} ${
                        item.ingredients
                    }`}
                </Item>
            ))}
        </List>
    );
}

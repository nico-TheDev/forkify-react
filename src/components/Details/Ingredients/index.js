import React from "react";
import { List, Item } from "./styles";
import { useApp } from "contexts/AppContext";
import getIcon from "util/getIcon";
import formatText from "util/formatText";

export default function Ingredients() {
    const { state } = useApp();
    const { currentRecipe } = state;
    return (
        <List>
            {currentRecipe?.ingredients.map((item) => (
                <Item key={item}>
                    <svg>
                        <use href={getIcon("check")} />
                    </svg>
                    {formatText(item)}
                </Item>
            ))}
        </List>
    );
}

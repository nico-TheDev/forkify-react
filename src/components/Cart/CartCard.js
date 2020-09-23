import React from "react";
import { Card, Delete } from "./styles";
import getIcon from "util/getIcon";
import { useApp } from "contexts/AppContext";
import ActionTypes from "ActionTypes";

export default function CartCard({ item }) {
    const { dispatch } = useApp();

    const handleClick = () => {
        console.log('click')
        dispatch({ type: ActionTypes.REMOVE_FROM_CART, id: item.id });
    };

    return (
        <Card>
            <input
                type="number"
                step={item.value}
                placeholder={`${item.value} ${item.unit}`}
            />
            <p>{item.ingredients || item.unit}</p>
            <Delete onClick={handleClick}>
                <svg>
                    <use href={getIcon("close-outline")} />
                </svg>
            </Delete>
        </Card>
    );
}

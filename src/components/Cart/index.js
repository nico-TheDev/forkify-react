import React from "react";
import { useApp } from "contexts/AppContext";
import { List } from './styles';
import CartCard from "./CartCard";

export default function Cart() {
    const { state } = useApp();
    const { shoppingCart } = state;

    return shoppingCart.length ? (
        <List>
            <h3>Shopping List</h3>
            {shoppingCart.map((item,i) => (
                <CartCard item={item} key={i}/>
            ))}
        </List>
    ) : null;
}

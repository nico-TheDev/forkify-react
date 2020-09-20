import React, { useState } from "react";

import { useApp } from "contexts/AppContext";
import { Button, Input, SearchForm } from "./styles";
import ActionTypes from "ActionTypes";
import getIcon from "util/getIcon";

export default function Search() {
    const { dispatch } = useApp();
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input !== "") {
            dispatch({
                type: ActionTypes.SET_LOADING,
                isLoading: true,
            });
            fetch(`https://forkify-api.herokuapp.com/api/search?q=${input}`)
                .then((res) => res.json())
                .then((data) => {
                    dispatch({
                        type: ActionTypes.SEARCH_RECIPE,
                        recipes: data.recipes,
                    });
                })
                .catch((err) => {
                    dispatch({
                        type: ActionTypes.SEARCH_RECIPE,
                        recipes: 'None',
                    });
                })
                .finally(() => {
                    dispatch({
                        type: ActionTypes.SET_LOADING,
                        isLoading: false,
                    });
                });
            setInput("");
        }
    };

    const handleChange = (e) => setInput(e.target.value);

    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Search over 1,000,000 recipes..."
                value={input}
                onChange={handleChange}
            />
            <Button>
                <svg>
                    <use href={getIcon("search")} />
                </svg>
                Search
            </Button>
        </SearchForm>
    );
}

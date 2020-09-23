import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "reducers/AppReducer";

const AppContext = createContext();

const getItem = (name) => {
    if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name));
    } else {
        return [];
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, {
        recipes: null,
        currentRecipe: null,
        savedRecipes: getItem('bookmarks'),
        recipeList: null,
        isLoading: false,
        shoppingCart: [],
    });

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);

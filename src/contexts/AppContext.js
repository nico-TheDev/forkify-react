import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "reducers/AppReducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, {
        recipes: null,
        currentRecipe: null,
        savedRecipes: null,
        recipeList: null,
        isLoading: false,
    });

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);

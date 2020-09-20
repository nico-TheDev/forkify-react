import ActionTypes from "ActionTypes";

export default function AppReducer(state, action) {
    switch (action.type) {
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        case ActionTypes.SEARCH_RECIPE:
            return {
                ...state,
                recipes: action.recipes,
                recipeList: action.recipes?.slice(0, 10),
            };

        case ActionTypes.GET_RECIPE_DETAIL:
            return {
                ...state,
                currentRecipe: action.recipe,
            };

        case ActionTypes.NEXT_PAGE:
            const { page } = action;
            const start = (page - 1) * 10;
            const end = (page - 1) * 10 + 10;

            return {
                ...state,
                recipeList: state.recipes?.slice(start, end),
            };

        case ActionTypes.PREV_PAGE:
            const { page: page2 } = action;
            const start2 = (page2 - 1) * 10;
            const end2 = page2 * 10 + 10;

            return {
                ...state,
                recipeList: state.recipes?.slice(start2, end2),
            };
        default:
            return state;
    }
}

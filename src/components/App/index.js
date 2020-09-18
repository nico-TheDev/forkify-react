import React from "react";

import "assets/css/resets.css";
import { MainApp, RecipeBoard } from "./style";
import Nav from "components/Nav";
import RecipeList from "components/RecipeList";

export default function App() {
    return (
        <MainApp>
            <Nav />
            <RecipeBoard>
                <RecipeList />
                <div style={{background:'crimson'}}></div>
                <div style={{background:'lime'}}></div>
            </RecipeBoard>
        </MainApp>
    );
}

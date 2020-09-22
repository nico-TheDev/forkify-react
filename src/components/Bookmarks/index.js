import React, { useState } from "react";
import { Like as BookmarkBtn, BookmarksBody, List } from "./styles";
import getIcon from "util/getIcon";
import { useApp } from "contexts/AppContext";
import BookMarkCard from "./BookMarkCard";

export default function Bookmarks() {
    const { state } = useApp();
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => setIsVisible(true);

    const handleMouseOut = () => setIsVisible(false);

    return state.savedRecipes.length ? (
        <BookmarksBody>
            <BookmarkBtn onClick={handleClick}>
                <svg>
                    <use href={getIcon("bookmark")} />
                </svg>
            </BookmarkBtn>

            <List isVisible={isVisible} onMouseLeave={handleMouseOut}>
                <h2>BOOKMARKED</h2>
                {state.savedRecipes &&
                    state.savedRecipes.map((item) => (
                        <BookMarkCard key={item.recipe_id} recipe={item} />
                    ))}
            </List>
        </BookmarksBody>
    ) : (
        <div />
    );
}

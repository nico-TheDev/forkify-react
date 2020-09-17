import Search from "components/Search";
import React from "react";
import getIcon from "util/getIcon";
import { Logo, IconLogo, NavWrapper } from "./styles";

export default function Nav() {
    return (
        <NavWrapper>
            <Logo>
                <IconLogo>
                    <svg>
                        <use href={getIcon("utensils")} />
                    </svg>
                </IconLogo>
                Reactified
            </Logo>

            <Search />

            <div/>
        </NavWrapper>
    );
}

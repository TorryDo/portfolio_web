import React from "react";
import { NavBarItems } from "./data/NavBarItems";
import "./NavBar.css";
import { NavItem } from "./NavItem";

function NavBar(
    {className}
) {

    const navItem = (it, index) =>
        <NavItem
            id={index}
            title={it.title}
            url={it.url}
            cName={it.cName}
        />

    const MAIN_TITLE = "TRI"

    return (
        <div className={className}>

            <div className="NavBar--MainTitle">
                {MAIN_TITLE}

            </div>

            <ul className="NavBar--Options">
                {
                    NavBarItems.map(
                        (it, index) => navItem(it, index)
                    )
                }
            </ul>

        </div>
    )
}

export default NavBar;
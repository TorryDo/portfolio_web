import React from "react";
import { NavBarItems } from "./data/NavBarItems";
import "./NavBar.css";
import { NavItem } from "./NavItem";

function NavBar() {

    const navItem = (it, index) =>
        <NavItem
            id={index}
            title={it.title}
            url={it.url}
            cName={it.cName}
        />

    const MAIN_TITLE = "TRI"

    return (
        <div id="NavBar">

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
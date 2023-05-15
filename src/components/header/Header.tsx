import React from "react";
import classes from "./Header.module.scss";
import SearchBar from "../searchBar/SearchBar";
import NavBar from "../navbar/NavBar";

function Header() {
  return (
    <header>
        <div className={classes.colFull}>
            <div className={classes.siteBranding}>
                <a href="/">mystore</a>
            </div>
            <SearchBar />
        </div>
        <NavBar />
    </header>
  );
}

export default Header;

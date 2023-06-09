import React from "react";
import classes from "./Header.module.scss";
import SiteBranding from "../siteBranding/SiteBranding";
import SearchBar from "../searchBar/SearchBar";
import CartContent from "../cartContent/CartContent";
import NavBar from "../navbar/NavBar";

function Header() {
  return (
    <header className={classes.headerContainer}>
        <div className={`${classes.brandingContainer} ${classes.colFull}`}>
            <SiteBranding />
            <SearchBar />
        </div>
        <div className={`${classes.colFull} ${classes.navBarContainer}`}>
            <NavBar />
            <CartContent />
        </div>
    </header>
  );
}

export default Header;

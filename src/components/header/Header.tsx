import React from "react";
import appClasses from "../../App.module.scss";
import classes from "./Header.module.scss";
import SiteBranding from "../siteBranding/SiteBranding";
import SearchBar from "../searchBar/SearchBar";
import CartContent from "../cartContent/CartContent";
import NavBar from "../navbar/NavBar";

function Header() {
  return (
    <header className={classes.headerContainer}>
        <div className={`${classes.brandingContainer} ${appClasses.colFull}`}>
            <SiteBranding />
            <SearchBar />
        </div>
        <div className={`${appClasses.colFull} ${classes.navBarContainer}`}>
            <NavBar />
            <CartContent />
        </div>
    </header>
  );
}

export default Header;

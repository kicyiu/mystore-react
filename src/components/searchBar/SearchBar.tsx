import React from "react";
import classes from "./SearchBar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    return (
        <div className={classes.siteSearch}>
            <div className={classes.productSearchDiv}>
                <input className={classes.searchInput} type="search" placeholder="Search products..."/>
                <FontAwesomeIcon className={classes.searchIcon} icon={faMagnifyingGlass}/>
            </div>
        </div>
    );
}

export default SearchBar;
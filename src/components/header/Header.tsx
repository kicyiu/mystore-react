import React from "react";
import { useSelector } from 'react-redux';
import appClasses from "../../App.module.scss";
import classes from "./Header.module.scss";
import SiteBranding from "../siteBranding/SiteBranding";
import SearchBar from "../searchBar/SearchBar";
import CartContent from "../cartContent/CartContent";
import NavBar from "../navbar/NavBar";
import { RootState } from "../../store";

function Header() {

  const cartItems = useSelector((state: RootState ) => state.cartItems.itemsList);
  const cartTotalAmount = useSelector((state: RootState ) => state.cartItems.totalPrice).toFixed(2);
  const cartItemsCount = cartItems.length ? 
    cartItems.reduce((total, item) => total + item.quantity, 0) 
  : 0;


  return (
    <header className={classes.headerContainer}>
        <div className={`${classes.brandingContainer} ${appClasses.colFull}`}>
            <SiteBranding />
            <SearchBar />
        </div>
        <div className={`${appClasses.colFull} ${classes.navBarContainer}`}>
            <NavBar />
            <CartContent itemsCount={cartItemsCount} totalAmount={cartTotalAmount}/>
        </div>
    </header>
  );
}

export default Header;

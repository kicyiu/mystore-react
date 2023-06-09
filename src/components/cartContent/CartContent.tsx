import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import classes from "./CartContent.module.scss";

function CartContent() {
    return (
        <div data-testid="cart-content-container" className={classes.cartContainer}>
            <span data-testid="cart-total" className={classes.cartTotal}>$0</span>
            <span data-testid="items-count" className={classes.itemsCount}>0 items</span>
            <FontAwesomeIcon className={classes.cartIcon} icon={faBasketShopping} title="cartIcon"/>
        </div>
    );
}

export default CartContent;

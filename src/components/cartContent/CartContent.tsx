import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import classes from "./CartContent.module.scss";
import { CartContentProps } from "./CartContent.interface";

function CartContent({ 
    itemsCount,
    totalAmount 
}: CartContentProps) {
    return (
        <div data-testid="cart-content-container" className={classes.cartContainer}>
            <span data-testid="cart-total" className={classes.cartTotal}>${totalAmount}</span>
            <span data-testid="items-count" className={classes.itemsCount}>{itemsCount} items</span>
            <FontAwesomeIcon className={classes.cartIcon} icon={faBasketShopping} title="cartIcon"/>
        </div>
    );
}

export default CartContent;

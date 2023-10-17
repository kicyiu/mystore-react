import React from "react";
import { useDispatch } from 'react-redux';
import { cartItemsActions } from '../../store/cartItem';
import classes from "./ProductCard.module.scss"
import { Button } from "react-bootstrap";
import { ProductCardProps } from "./ProductCard.interface";

function ProductCard({
    id, 
    src, 
    name, 
    price, 
    regular_price,
    sale_price 
}: ProductCardProps) {

    const dispatch = useDispatch();
    let salesIndicatorClasses = classes.salesIndicator;
    if (!sale_price) {
        salesIndicatorClasses = `${classes.salesIndicator} ${classes.salesIndicatorHidden}`
    }
    
    function addItemToCart() {
        const payload = {
            id,
            name,
            price,
            quantity: 1

        }
        dispatch(cartItemsActions.addCartItem(payload));
    }



    return (
        <div data-testid="product-card" className="card">
            <img src={src} alt="..." />
            <div data-testid="product-card-body" className={`${classes.cardBodyCont} card-body`}>
                <h5 className="card-title ">{ name }</h5>
                <span data-testid="sales-indicator" className={salesIndicatorClasses}>Sale!</span>
                <div>
                    {sale_price && (
                        <del data-testid="regular-price" className={classes.regularPrice}>${ regular_price }</del>
                    )}
                    <span data-testid="current-price" className={classes.currentPrice}>${ price }</span>
                </div>
                <Button className={`btn btn-light ${classes.addToCartBtn}`} onClick={addItemToCart}>Add to cart</Button>
            </div>
        </div>
    );
}

export default ProductCard;
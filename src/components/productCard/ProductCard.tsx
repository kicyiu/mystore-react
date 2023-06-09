import React from "react";
import classes from "./ProductCard.module.scss"

function ProductCard() {
    return (
        <div data-testid="product-card" className="card">
            <img src="http://mystore.local/wp-content/uploads/2019/01/hoodie-with-pocket-2.jpg" alt="..." />
            <div data-testid="product-card-body" className={`${classes.cardBodyCont} card-body`}>
                <h5 className="card-title ">Hoodie with Pocket</h5>
                <span data-testid="sales-indicator" className={classes.salesIndicator}>Sale!</span>
                <div data-testid="product-price">$20</div>
            </div>
        </div>
    );
}

export default ProductCard;
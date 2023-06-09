import React, { Fragment } from "react";
import Masonry from "react-masonry-css";
import classes from './Home.module.scss';
import ProductCard from "../../components/productCard/ProductCard";

function Home() {
    return (
        <Fragment >
            <header className={classes.pageHeader}>
                <h1>Shop</h1>
            </header>
            <Masonry 
                data-testid="product-card-container"
                //className="card-columns m-5 animated fadeIn"
                breakpointCols={4}
                className={classes.masonryGrid}
                columnClassName={classes.masonryGridColumn}
            >
                <ProductCard />

            </Masonry>
        </Fragment>
    );
}

export default Home;
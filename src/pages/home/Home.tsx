import React, { Fragment } from "react";
import Masonry from "react-masonry-css";
import appClasses from "../../App.module.scss";
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
                breakpointCols={4}
                className={`${classes.masonryGrid} ${appClasses.animated} ${appClasses.fadeIn}`}
                columnClassName={classes.masonryGridColumn}
            >
                <ProductCard 
                    src="http://mystore.local/wp-content/uploads/2019/01/hoodie-with-pocket-2.jpg"
                    name="Hoodie with pocket"
                    price={30}
                    regular_price={40}
                />

<ProductCard 
                    src="http://mystore.local/wp-content/uploads/2019/01/hoodie-with-pocket-2.jpg"
                    name="Hoodie with pocket"
                    price={30}
                />

            </Masonry>
        </Fragment>
    );
}

export default Home;
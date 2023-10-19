import React, { Fragment, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import appClasses from "../../App.module.scss";
import classes from './Home.module.scss';
import ProductCard from "../../components/productCard/ProductCard";
import { GetProductsRequest } from "./Home.interface";
import axios from "axios";


function Home() {

    const [products, setProducts] = useState<GetProductsRequest[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get('http://localhost:8000/products');
            setProducts(data);
        }

        fetchProducts();
    }, []);

    

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
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        src={product.images[0].src}
                        name={product.name}
                        price={product.price}
                        regular_price={product.regular_price}
                        sale_price={product.sale_price}
                    />

                ))}
            </Masonry>
        </Fragment>
    );
}

export default Home;
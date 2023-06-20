import React from "react";
import { render, screen, within } from '@testing-library/react';
import ProductCard from "./ProductCard";
import { ProductCardProps } from "./ProductCard.interface";

describe('ProductCard', () => {

    const props: ProductCardProps = {
        src: 'http://mystore.local/wp-content/uploads/2019/01/hoodie-with-pocket-2.jpg',
        name: 'Hoodie with pocket',
        price: 30,
        regular_price: 25
    };


    it('should render div with card style', () => {
        render(<ProductCard src={props.src} name={props.name} price={props.price}/>);
        const productCardElement = screen.getByTestId('product-card');
        expect(productCardElement).toHaveClass('card');
        expect(productCardElement).toBeInTheDocument();
    });

    it('inside card should render same image passed into prop', () => {
        render(<ProductCard src={props.src} name={props.name} price={props.price}/>);
        const productCardElement = screen.getByTestId('product-card');
        const imgElement = within(productCardElement).getByRole('img');
        expect(imgElement).toBeInTheDocument()
        expect(imgElement).toHaveAttribute('src', props.src);
    });

    it('inside the card should render div with card-body style', () => {
        render(<ProductCard src={props.src} name={props.name} price={props.price}/>);
        const productCardElement = screen.getByTestId('product-card');
        const cardBodyElement = within(productCardElement).getByTestId('product-card-body');
        expect(cardBodyElement).toBeInTheDocument()
        expect(cardBodyElement).toHaveClass('card-body');
    });

    describe('Product Name', () => {
        it('inside product-card-body should render h5 with same name passed into prop', () => {
            render(<ProductCard src={props.src} name={props.name} price={props.price} />);
            const cardBodyElement = screen.getByTestId('product-card-body');
            const cardTitleElement = within(cardBodyElement).getByRole('heading', { name: props.name });
            expect(cardTitleElement).toBeInTheDocument();
        });

        it('product name should have card-title style', () => {
            render(<ProductCard src={props.src} name={props.name} price={props.price}/>);
            const cardBodyElement = screen.getByTestId('product-card-body');
            const cardTitleElement = within(cardBodyElement).getByRole('heading', { name: props.name });
            expect(cardTitleElement).toHaveClass('card-title');
        });

    });

    it('should contain sales indicator inside product-card-body element', () => {
        render(<ProductCard src={props.src} name={props.name} price={props.price}/>);
        const cardBodyElement = screen.getByTestId('product-card-body');
        const salesIndicatorElement = within(cardBodyElement).getByTestId('sales-indicator');
        expect(salesIndicatorElement).toBeInTheDocument();
        expect(salesIndicatorElement).toHaveTextContent('Sale!');
    });

    it('should render current product price with same price passed into prop', () => {
        render(<ProductCard src={props.src} name={props.name} price={props.price} />);
        const cardBodyElement = screen.getByTestId('product-card-body');
        const priceElement = within(cardBodyElement).getByTestId('current-price');
        expect(priceElement).toBeInTheDocument();
        expect(priceElement).toHaveTextContent(`$${props.price}`);
    });

    describe('Regular Price', () => {
        it('should render regular price with same price passed into prop', () => {
            render(<ProductCard src={props.src} name={props.name} price={props.price} regular_price={props.regular_price} />);
            const cardBodyElement = screen.getByTestId('product-card-body');
            const salePriceElement = within(cardBodyElement).getByTestId('regular-price');
            expect(salePriceElement).toBeInTheDocument();
            expect(salePriceElement).toHaveTextContent(`${props.regular_price}`);
        });

        it('should not render regular price when is regular_price is not passed into prop', () => {
            render(<ProductCard src={props.src} name={props.name} price={props.price} />);
            const salePriceElement = screen.queryByRole('regular-price');
            expect(salePriceElement).not.toBeInTheDocument();
        });

    });

    it("should contain 'Add to cart' button inside product-card-body element", () => {
        render(<ProductCard src={props.src} name={props.name} price={props.price} />);
        const cardBodyElement = screen.getByTestId('product-card-body');
        const buttonElement = within(cardBodyElement).getByRole('button', { name: 'Add to cart' });
        expect(buttonElement).toBeInTheDocument();
    });



});
import React from "react";
import { render, screen, within } from '@testing-library/react';
import ProductCard from "./ProductCard";

describe('ProductCard', () => {

    it('should render div with card style', () => {
        render(<ProductCard />);
        const productCardElement = screen.getByTestId('product-card');
        expect(productCardElement).toHaveClass('card');
        expect(productCardElement).toBeInTheDocument();
    });

    it('should contain product image inside the card', () => {
        render(<ProductCard />);
        const productCardElement = screen.getByTestId('product-card');
        const imgElement = within(productCardElement).getByRole('img');
        expect(imgElement).toBeInTheDocument()
        expect(imgElement).toHaveAttribute('src', 'http://mystore.local/wp-content/uploads/2019/01/hoodie-with-pocket-2.jpg');
    });

    it('should cointain div with card-body style inside the card', () => {
        render(<ProductCard />);
        const productCardElement = screen.getByTestId('product-card');
        const cardBodyElement = within(productCardElement).getByTestId('product-card-body');
        expect(cardBodyElement).toBeInTheDocument()
        expect(cardBodyElement).toHaveClass('card-body');
    });

    it('should contain h5 with card-title style inside product-card-body element', () => {
        render(<ProductCard />);
        const cardBodyElement = screen.getByTestId('product-card-body');
        const cardTitleElement = within(cardBodyElement).getByRole('heading');
        expect(cardTitleElement).toBeInTheDocument();
        expect(cardTitleElement).toHaveClass('card-title');
    });

    it('should contain sales indicator inside product-card-body element', () => {
        render(<ProductCard />);
        const cardBodyElement = screen.getByTestId('product-card-body');
        const salesIndicatorElement = within(cardBodyElement).getByTestId('sales-indicator');
        expect(salesIndicatorElement).toBeInTheDocument();
        expect(salesIndicatorElement).toHaveTextContent('Sale!');
    });

    it('should contain product price inside product-card-body element', () => {
        render(<ProductCard />);
        const cardBodyElement = screen.getByTestId('product-card-body');
        const priceElement = within(cardBodyElement).getByTestId('product-price');
        expect(priceElement).toBeInTheDocument();
        expect(priceElement).toHaveTextContent(/\$[0-9]*/);

    });



});
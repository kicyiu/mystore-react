import React from "react";
import { render, screen, within } from '@testing-library/react'
import Home from './Home';

describe('Home', () => {
    it("should have 'Shop' title", () => {
        render(<Home />);
        const titleElement = screen.getByRole('heading', { name: 'Shop' });
        expect(titleElement).toBeInTheDocument();
    });

    it("should render product cards div cointainer", () => {
        render(<Home />);
        const cardDivElement = screen.getByTestId('product-card-container');
        expect(cardDivElement).toBeInTheDocument();
    });
    
    test("product cards div cointainer should have 'card-columns m-5 animated fadeIn' classes", () => {
        render(<Home />);
        const cardDivElement = screen.getByTestId('product-card-container');
        expect(cardDivElement).toHaveClass("card-columns m-5 animated fadeIn");
    });

    it("shoud render Product Card", () => {
        render(<Home />);
        const cardDivElement = screen.getByTestId('product-card-container');
        const productCardElement = within(cardDivElement).getByTestId('product-card');
        expect(productCardElement).toBeInTheDocument();
    });
});
import React from "react";
import { render, screen, within, waitFor } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from  '../../store/index';



const MockHome = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

describe('Home', () => {
    it("should have 'Shop' title", async () => {
        render(<MockHome />);
        const titleElement = await waitFor(() => screen.findByRole('heading', { name: 'Shop' }));
        expect(titleElement).toBeInTheDocument();
    });

    it("should render product cards div cointainer", async () => {
        render(<MockHome />);
        const cardDivElement = await waitFor(() => screen.findByTestId('product-card-container'));
        expect(cardDivElement).toBeInTheDocument();
    });
    
    test("product cards div cointainer should have 'animated fadeIn' classes", async () => {
        render(<MockHome />);
        const cardDivElement = await waitFor(() => screen.findByTestId('product-card-container'));
        expect(cardDivElement).toHaveClass("animated fadeIn");
    });

    it("shoud render Product Card", async () => {
        render(<MockHome />);
        const cardDivElement = screen.getByTestId('product-card-container');
        const productCardElements = await waitFor(() => within(cardDivElement).findAllByTestId('product-card'));
        expect(productCardElements.length).toBeGreaterThan(0);
    });
});
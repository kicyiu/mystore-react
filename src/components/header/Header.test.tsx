import React from 'react';
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from  '../../store/index';
import Header from './Header';

const mockResponse = {
    cartItems: []
}

const MockHeader = () => {
    return (
        <Provider store={store}>
            <Header />
        </Provider>
    )
}


describe('Header', () => {
    
    jest.mock("react-redux", () => ({
        useSelector: jest.fn().mockResolvedValue(mockResponse),
    }));


    it('should render page name', () => {
        render(<MockHeader />);
        const siteBrandingLink = screen.getByTestId('site-branding-container');
        expect(siteBrandingLink).toBeInTheDocument();
    });

    it('should render search input', () => {
        render(<MockHeader />);
        const searchInput = screen.getByRole('searchbox');
        expect(searchInput).toBeInTheDocument();
    });

    it('should render nav bar', () => {
        render(<MockHeader />);
        const navbarElement = screen.getByRole("navigation");
        expect(navbarElement).toBeInTheDocument();
    });

    it('should render cart content and icon', () => {
        render(<MockHeader />);
        const cartContentContainer = screen.getByTestId('cart-content-container');
        expect(cartContentContainer).toBeInTheDocument();
    });
});
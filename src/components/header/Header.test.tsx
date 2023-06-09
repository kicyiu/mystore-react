import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from './Header';

describe('Header', () => {
    it('should render page name', () => {
        render(<Header />);
        const siteBrandingLink = screen.getByTestId('site-branding-container');
        expect(siteBrandingLink).toBeInTheDocument();
    });

    it('should render search input', () => {
        render(<Header />);
        const searchInput = screen.getByRole('searchbox');
        expect(searchInput).toBeInTheDocument();
    });

    it('should render nav bar', () => {
        render(<Header />);
        const navbarElement = screen.getByRole("navigation");
        expect(navbarElement).toBeInTheDocument();
    });

    it('shoud render cart content and icon', () => {
        render(<Header />);
        const cartContentContainer = screen.getByTestId('cart-content-container');
        expect(cartContentContainer).toBeInTheDocument();
    });
});
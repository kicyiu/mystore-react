import React from 'react';
import { render, screen } from '@testing-library/react'
import Header from './Header';

describe('Header', () => {
    it('should renders page name', () => {
        render(<Header />);
        const pageNameLink = screen.getByRole('link', { name: 'mystore' });
        expect(pageNameLink).toBeInTheDocument();
    });

    it('should be redirected to home page when click on page name', () => {
        render(<Header />);
        const pageNameLink = screen.getByRole('link', { name: 'mystore' });
        expect(pageNameLink).toHaveAttribute('href', '/');
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
});
import React from 'react';
import { render, screen } from '@testing-library/react'
import NavBar from './NavBar';

const options = 'Home, Cart, Checkout, My Account'

describe('NavBar', () => {
    test(`Nav bar should have the options ${options}`, () => {
        render(<NavBar />);
        const optionsList = options.split(', ');

        optionsList.forEach(option => {
            const linkElement = screen.getByRole('link', { name: option });
            expect(linkElement).toBeInTheDocument();
        })

    });

    test('when click on home it should redirect to home page', () => {
        render(<NavBar />);

        const linkElement = screen.getByRole('link', { name: 'Home' });
        expect(linkElement).toHaveAttribute('href', '/home');
        
    });
});
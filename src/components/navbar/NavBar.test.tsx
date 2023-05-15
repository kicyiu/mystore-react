import React from 'react';
import { render, screen } from '@testing-library/react'
import NavBar from './NavBar';

const options = 'Home, Cart, Checkout, My account'

describe('NavBar', () => {
    it(`Nav bar should have the options ${options}`, () => {
        render(<NavBar />);
        const optionsList = options.split(', ');

        optionsList.forEach(option => {
            const linkElement = screen.getByRole('link', { name: option });
            expect(linkElement).toHaveAttribute('href', `/${option.toLowerCase().replace(' ', '')}`);
        })

    });
});
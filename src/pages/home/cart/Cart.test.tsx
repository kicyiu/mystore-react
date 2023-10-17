import React from "react";
import { render, screen } from '@testing-library/react';
import Cart from "./Cart";


describe('Cart', () => {
    it('should render Cart in title', () => {
        render(<Cart />);
        const titleElement = screen.getByRole('heading', { name: 'Cart' });
        expect(titleElement).toBeInTheDocument();
    });
})
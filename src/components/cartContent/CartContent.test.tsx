import React from "react";
import { render, screen } from "@testing-library/react";
import CartContent from "./CartContent";

describe('CartContent', () => {
    it("should contain 'basket-shopping' cart icon", () => {
        render(<CartContent />);
        const cartIcon = screen.getByRole('img', { name: 'cartIcon' });
        expect(cartIcon).toHaveAttribute('data-icon', 'basket-shopping');
    });

    it('should contain cart total amount' , () => {
        render(<CartContent />);
        const cartTotalElement = screen.getByTestId('cart-total');
        expect(cartTotalElement).toHaveTextContent(/\$[0-9]*/);
    });

    it('should contain number of items in the cart' , () => {
        render(<CartContent />);
        const itemsCountElement = screen.getByTestId('items-count');
        expect(itemsCountElement).toHaveTextContent(/[0-9]* items/);
    });
});
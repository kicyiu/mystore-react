import React from "react";
import { render, screen } from "@testing-library/react";
import CartContent from "./CartContent";
import { CartContentProps } from "./CartContent.interface";

describe('CartContent', () => {

    const props: CartContentProps = {
        itemsCount: 2,
        totalAmount: '100'
    }

    it("should contain 'basket-shopping' cart icon", () => {
        render(<CartContent itemsCount={props.itemsCount} totalAmount={props.totalAmount} />);
        const cartIcon = screen.getByRole('img', { name: 'cartIcon' });
        expect(cartIcon).toHaveAttribute('data-icon', 'basket-shopping');
    });

    it('should contain same total amount pass on props' , () => {
        render(<CartContent itemsCount={props.itemsCount} totalAmount={props.totalAmount} />);
        const cartTotalElement = screen.getByText(`$${props.totalAmount}`);
        expect(cartTotalElement).toBeInTheDocument();
    });

    it('should contain same number of items pass on props' , () => {
        render(<CartContent itemsCount={props.itemsCount} totalAmount={props.totalAmount} />);
        const itemsCountElement = screen.getByText(`${props.itemsCount} items`);
        expect(itemsCountElement).toBeInTheDocument();
    });
});
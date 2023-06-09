import React from "react";
import { render, screen, within } from '@testing-library/react';
import Footer from "./Footer";

describe('Footer', () => {
    it('should have footer element', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    it("should show the paragraph with text '© mystore 2023'", () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        const paragraphElement = within(footerElement).getByText('© mystore 2023');
        expect(paragraphElement).toBeInTheDocument();
    })
});
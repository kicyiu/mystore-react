import React from "react";
import { render, screen } from '@testing-library/react'
import SearchBar from "./SearchBar";

describe('SearchBar', () => {
    it("should render a search product input with place holder text: 'Search products...'", () => {
        render(<SearchBar />);
        //const searchInput = screen.getByPlaceholderText(/Search products.../i);
        const searchInput = screen.getByRole('searchbox');
        expect(searchInput).toHaveAttribute('placeholder', 'Search products...');
        expect(searchInput).toBeInTheDocument();
    });

    it("should contain 'magnifying-glass' search icon", () => {
        render(<SearchBar />);
        const searchIcon = screen.getByRole('img', { name: 'searchIcon'});
        expect(searchIcon).toHaveAttribute('data-icon', 'magnifying-glass');
    });
});
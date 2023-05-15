import React from "react";
import { render, screen } from '@testing-library/react'
import SearchBar from "./SearchBar";

describe('SearchBar', () => {
    it("should renders a search product input with place holder text: 'Search products...'", () => {
        render(<SearchBar />);
        const searchInput = screen.getByPlaceholderText(/Search products.../i);
        expect(searchInput).toBeInTheDocument();
    });
});
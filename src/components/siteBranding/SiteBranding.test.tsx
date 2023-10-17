import React from "react";
import { render, screen } from "@testing-library/react";
import SiteBranding from "./SiteBranding";


describe('SiteBranding', () => {
    it('should render link with mystrore text', () => {
       render(<SiteBranding />);
       const siteBrandingLink = screen.getByRole('link', { name: 'mystore' });
       expect(siteBrandingLink).toBeInTheDocument(); 
    });

    it('should be redirected to home page when click on page name', () => {
        render(<SiteBranding />);
        const siteBrandingLink = screen.getByRole('link', { name: 'mystore' });
        expect(siteBrandingLink).toHaveAttribute('href', '/');
    });
});
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';


it('should render footer element', async () => {
  render(<App />);
  const footerElement = await waitFor(() => screen.findByRole('contentinfo'));
  expect(footerElement).toBeInTheDocument();
});

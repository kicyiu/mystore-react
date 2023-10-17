import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from  './store/index';



const MockApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

describe('App', () => {
  it('should render footer element', async () => {
    render(<MockApp />);
    const footerElement = await waitFor(() => screen.findByRole('contentinfo'));
    expect(footerElement).toBeInTheDocument();
  });

  it("should add an item to cart when press on 'Add to Cart' button", async () => {
    render(<MockApp />);
    const buttonElement = await screen.findAllByRole('button', { name: 'Add to cart' });
    fireEvent.click(buttonElement[0]);
    const itemsCountElement = screen.getByText(`1 items`);
    expect(itemsCountElement).toBeInTheDocument();
    //screen.debug();
    //console.log(buttonElement.length);
  });
});


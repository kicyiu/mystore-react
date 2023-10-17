import React from "react";
import { render, screen, within } from '@testing-library/react';
import ProductCard from "./ProductCard";
import { ProductCardProps } from "./ProductCard.interface";
import { Provider } from 'react-redux';
import store from  '../../store/index';



const MockProductCard = ({
    id, 
    src, 
    name, 
    price, 
    regular_price,
    sale_price 
}: ProductCardProps) => {
    return (
        <Provider store={store}>
            <ProductCard id={id} src={src} name={name} price={price} regular_price={regular_price} sale_price={sale_price} />
        </Provider>
    )
}


describe('ProductCard', () => {

    const props: ProductCardProps = {
        id: 12,
        src: 'http://mystore.local/wp-content/uploads/2019/01/hoodie-with-pocket-2.jpg',
        name: 'Hoodie with pocket',
        price: '30',
        regular_price: '40',
        sale_price: '30'
    };


    it('should render div with card style', () => {
        render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price}/>);
        const productCardElement = screen.getByTestId('product-card');
        expect(productCardElement).toHaveClass('card');
        expect(productCardElement).toBeInTheDocument();
    });

    it('inside card should render same image passed into prop', () => {
        render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price}/>);
        const productCardElement = screen.getByTestId('product-card');
        const imgElement = within(productCardElement).getByRole('img');
        expect(imgElement).toBeInTheDocument()
        expect(imgElement).toHaveAttribute('src', props.src);
    });

    it('inside the card should render div with card-body style', () => {
        render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price}/>);
        const productCardElement = screen.getByTestId('product-card');
        const cardBodyElement = within(productCardElement).getByTestId('product-card-body');
        expect(cardBodyElement).toBeInTheDocument()
        expect(cardBodyElement).toHaveClass('card-body');
    });

    describe('Product Name', () => {
        it('inside product-card-body should render h5 with same name passed into prop', () => {
            render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price} />);
            const cardBodyElement = screen.getByTestId('product-card-body');
            const cardTitleElement = within(cardBodyElement).getByRole('heading', { name: props.name });
            expect(cardTitleElement).toBeInTheDocument();
        });

        it('product name should have card-title style', () => {
            render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price}/>);
            const cardBodyElement = screen.getByTestId('product-card-body');
            const cardTitleElement = within(cardBodyElement).getByRole('heading', { name: props.name });
            expect(cardTitleElement).toHaveClass('card-title');
        });

    });

    describe('Sales Indicator', () => {
        it('should render when there is a sale price', () => {
            render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price} sale_price={props.sale_price}/>);
            const cardBodyElement = screen.getByTestId('product-card-body');
            const salesIndicatorElement = within(cardBodyElement).getByText('Sale!', { exact: true });
            expect(salesIndicatorElement).toBeInTheDocument();
        });

        it('should not render when there is no sale price', () => {
            render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price} sale_price="" />);
            const salesIndicatorElement = screen.getByText(/Sale!/i);
            expect(salesIndicatorElement).toHaveClass('salesIndicatorHidden');
        });
    });

    it('should render current product price with same price passed into prop', () => {
        render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price} />);
        const salePriceElement = screen.getByText(`$${props.price}`);
        expect(salePriceElement).toBeInTheDocument();
    });

    describe('Regular Price', () => {
        it('should render regular price with same price passed into prop when thre is a sale price', () => {
            render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price} regular_price={props.regular_price} sale_price={props.sale_price}/>);
            const salePriceElement = screen.getByText(`$${props.regular_price}`);
            expect(salePriceElement).toBeInTheDocument();
        });

        it('should not render regular price when sale price is empty', () => {
            render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price} sale_price="" />);
            const salePriceElement = screen.queryByText(`$${props.regular_price}`);
            expect(salePriceElement).not.toBeInTheDocument();
        });

    });

    it("should contain 'Add to cart' button inside product-card-body element", () => {
        render(<MockProductCard id={props.id} src={props.src} name={props.name} price={props.price} />);
        const cardBodyElement = screen.getByTestId('product-card-body');
        const buttonElement = within(cardBodyElement).getByRole('button', { name: 'Add to cart' });
        expect(buttonElement).toBeInTheDocument();
    });
});
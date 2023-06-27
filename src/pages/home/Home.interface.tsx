export interface GetProductsRequest {
    id: number;
    name: string;
    price: string;
    regular_price: string;
    sale_price: string
    images: [
        {
            src: string;
        }
    ]
}
export interface Product {
    name: string;
    description: string;
    price: number;
    type: string;
    image: string;
    showDetails: boolean;
    new?: boolean,
    outofstock?: boolean;
}

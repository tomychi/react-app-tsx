import { ReactElement } from 'react';

// por si recibo mas de una propiedad
export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]; // si envio varios hijos
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {

    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: ({ title }: {title?: string}) => JSX.Element,
    Image: ({ img }: {img?: string}) => JSX.Element,
    Buttons: () => JSX.Element,

}

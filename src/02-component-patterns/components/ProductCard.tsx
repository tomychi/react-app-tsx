import { createContext } from 'react';

import { useProduct } from '../hooks/useProducts';
import {
    ProductContextProps,
    ProductCardProps,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

// creamos nuestro contexto y definimos como va a ser
export const ProductContext = createContext({} as ProductContextProps);
// extraemos el provider; proveedor de informacion
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                product,
                counter,
                increaseBy,
            }}
        >
            <div className={styles.productCard}>{children}</div>
        </Provider>
    );
};

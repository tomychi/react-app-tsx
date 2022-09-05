import { createContext } from 'react';

import { useProduct } from '../hooks/useProducts';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

// creamos nuestro contexto y definimos como va a ser
export const ProductContext = createContext({} as ProductContextProps);
// extraemos el provider; proveedor de informacion
const { Provider } = ProductContext;

// por si recibo mas de una propiedad
export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[]; // si envio varios hijos
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    // para que todos los cambios los maneje useProduct le mando el onChange como dependencia
    const { counter, increaseBy } = useProduct( { onChange, product, value  } );

    return (
        <Provider
            value={{
                product,
                counter,
                increaseBy,
            }}
        >
            <div 
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    );
};

import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];


export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard 
                key={product.id}
                product={product}
                initialValues = {{
                    quantity: 4,
                    // maxQuantity: 10,
                }}
            >
                {/* Formik me devuelve una funcion y en base a eso trabajo */}
                {
                    ( {reset, quantity, isMaxQuantityReached, increaseBy, maxQuantity} ) => (
                        <>
                            <ProductImage />
                            <ProductTitle  />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>
        </div>
    );
};

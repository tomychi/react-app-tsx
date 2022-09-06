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
                className="bg-dark text-white"
                initialValues = {{
                    quantity: 4,
                    maxQuantity: 10,
                }}
            >
                {/* Formik me devuelve una funcion y en base a eso trabajo */}
                {
                    ( {reset, quantity, isMaxQuantityReached, increaseBy, maxQuantity} ) => (
                        <>
                            <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rba(0,0,0,0.2) '  }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset} >Reset</button>

                            <button onClick={()=> increaseBy(-2)} >-2</button>

                            {/* si no se llega al isMaxQuantity, ocultar */}

                            {
                                (!isMaxQuantityReached && <button onClick={()=> increaseBy(+2)} >+2</button>)
                            }   
                            <span>{quantity} - {maxQuantity}</span>

                        </>
                    )
                }
            </ProductCard>
        </div>
    );
};

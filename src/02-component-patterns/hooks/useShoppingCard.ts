import { useState } from "react";
import { ProductInCart, Product } from '../interfaces/interfaces';



export const useShoppingCart = () => {
      // las llaves son strings y los valores son ProductInCart
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart  }>({});

    const onProductCountChange = ( {quantity, product}: {quantity: number, product:Product} ) => {

        setShoppingCart( (prevShoppingCart) => {

            // si existe el producto en el carrito
            const productInCart: ProductInCart = prevShoppingCart[product.id] || {...product, quantity: 0};

            if ( Math.max( productInCart.quantity + quantity, 0 ) > 0) {
                productInCart.quantity += quantity;
                return {
                    ...prevShoppingCart,
                    [product.id]: productInCart,
                };
            }

            // borrar el producto del carrito
            const { [product.id]: _, ...rest } = prevShoppingCart;
            return {...rest};
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    }

}
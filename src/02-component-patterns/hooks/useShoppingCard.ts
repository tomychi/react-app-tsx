import { useState } from "react";
import { ProductInCart, Product } from '../interfaces/interfaces';



export const useShoppingCart = () => {
      // las llaves son strings y los valores son ProductInCart
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart  }>({});

    const onProductCountChange = ( {quantity, product}: {quantity: number, product:Product} ) => {

        setShoppingCart( (prevShoppingCart) => {

            if (quantity === 0) {
                // borramos el elemento del carrito
                const { [product.id]: _, ...rest } = prevShoppingCart;
                return rest;
            }
            return {
                ...prevShoppingCart,
                [product.id]: {...product, quantity},
            }

        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    }

}
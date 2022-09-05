import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}


export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [counter , setCounter ] = useState(value);


    const increaseBy = ( value: number ) => {
        
        const newValue = Math.max(0, counter + value);

        setCounter( newValue ); 

        onChange && onChange( { quantity: newValue, product  } );
    }

    useEffect(() => {

        setCounter(value);


    }, [value]) // cuando el value cambie, se ejecutará el useEffect
    



    return {
        counter,
        increaseBy
    }
}
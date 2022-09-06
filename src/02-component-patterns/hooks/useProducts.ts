import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {

    const [counter , setCounter ] = useState<number>( initialValues?.quantity || value );

    // seguimiento cuando mi componente es montado
    const isMounted = useRef(false); // para no renderizar cuando el componente es montado


    const increaseBy = ( value: number ) => {
        
        let newValue = Math.max(0, counter + value);
        if (initialValues?.maxQuantity) {
            newValue = Math.min(initialValues?.maxQuantity, newValue);
        }

        setCounter( newValue ); 

        onChange && onChange( { quantity: newValue, product  } );
    }

    const reset = () => {
        setCounter(initialValues?.quantity || value);
    }

    useEffect(() => {
        // si es falso no renderizar
        if ( !isMounted.current ) return;
        else isMounted.current = true;

        setCounter(value);


    }, [value]) // cuando el value cambie, se ejecutará el useEffect
    




    return {
        counter,
        isMaxQuantityReached: !!initialValues?.quantity && initialValues?.maxQuantity === counter,
        maxQuantity: initialValues?.maxQuantity,
        
        increaseBy,
        reset
    }
}
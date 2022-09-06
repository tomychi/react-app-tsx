import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import { useCallback } from "react";

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const  ProductButtons = ({className, style }: Props) => {

    // extraemos la informacion del contexto
    const {increaseBy, counter, maxQuantity  } = useContext(ProductContext);

    // TODO: isMaxReached = useCallback( () => {}, [maxQuantity, counter] );
    // TRUE si el count === maxQuantity
    // FALSE si no lo es
    const isMaxReached = useCallback(
        // si no existe 
        () => !!maxQuantity && counter === maxQuantity,
        [counter, maxQuantity],
    )
    


    return (
        <div 
            className={ `${styles.buttonsContainer} ${className}` }
            style={style}
        >

            <button 
                className={ styles.buttonMinus } 
                onClick={ () => increaseBy(-1) }
            > 
                - 
            </button>

            <div 
                className={ styles.countLabel }
            > 
                { counter } 
            </div>

            <button 
                className={ `${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`}
                onClick={ () => increaseBy(+1) }
            > 
                + 
            </button>

        </div>
    );

}

import { useContext } from "react";
import { ProductContext } from "./ProductCard";


import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';


export const ProductImage = ({img = ''}) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img  
            className={ styles.productImg }
            // si viene la imagen la muestro, sino la imagen por defecto
            src={ imgToShow } 
            alt="Product images" 
        />
    )
}
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from '../components';

// ejemplo de producto
const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {/* dos formas de hacerlo */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'cafecito'} />
                    <ProductCard.Buttons />
                </ProductCard>

                {/* *****************************  */}

                <ProductCard product={product}>
                    {/* asegurarse que recibe hijos */}
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    );
};

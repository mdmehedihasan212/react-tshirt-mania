import React from 'react';
import './Product.css';

const Product = ({ tShirt, AddToProduct }) => {
    console.log(tShirt);
    const { name, picture, price } = tShirt;
    return (
        <div className='product-container'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => AddToProduct(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default Product;
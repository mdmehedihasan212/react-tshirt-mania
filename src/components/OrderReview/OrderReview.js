import React from 'react';

const OrderReview = ({ cart, RemoveToProduct }) => {
    console.log(cart);
    return (
        <div>
            <h1>OrderReview {cart.length}</h1>
            {
                cart.map(tShirt =>
                    <p>{tShirt.name}
                        <button onClick={() => RemoveToProduct(tShirt)}>Delete</button>
                    </p>)

            }
        </div>
    );
};

export default OrderReview;
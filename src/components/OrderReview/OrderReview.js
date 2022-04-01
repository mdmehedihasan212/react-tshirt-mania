import React from 'react';
import './OrderReview.css';

const OrderReview = ({ cart, RemoveToProduct }) => {
    console.log(cart);
    let condition;
    if (cart.length === 0) {
        condition = <p>Please Add Item</p>
    }
    else if (cart.length === 1) {
        condition = <p>Please Add More Item!!</p>
    }
    else {
        condition = <p>Thanks For Add Item!!!</p>
    }
    return (
        <div>
            <h3>OrderReview {cart.length}</h3>
            {
                cart.map(tShirt =>
                    <p>{tShirt.name}
                        <button onClick={() => RemoveToProduct(tShirt)}>Delete</button>
                    </p>)

            }
            {condition}
            {
                cart.length === 0 || <p className='orange'>YAH!!! You are Buying</p>
            }
            {cart.length === 3 && <div className='orange'>
                <p>This is Three</p>
            </div>}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove One</button>}
        </div>
    );
};

export default OrderReview;
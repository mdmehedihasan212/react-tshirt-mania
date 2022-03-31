import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirt';
import OrderReview from '../OrderReview/OrderReview';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();
    const [cart, setCart] = useState([]);

    const AddToProduct = selectedItem => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else {
            alert('Please Select One Item')
        }
    }

    const RemoveToProduct = selectedItem => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id)
        setCart(rest)
    }

    return (
        <div className='home-container'>
            <div className="tShirt-container">
                {
                    tShirts.map(tShirt => <Product
                        key={tShirt._id}
                        tShirt={tShirt}
                        AddToProduct={AddToProduct}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <h1>Order</h1>
                <OrderReview
                    cart={cart}
                    RemoveToProduct={RemoveToProduct}
                ></OrderReview>
            </div>
        </div>
    );
};

export default Home;
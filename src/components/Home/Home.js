import React from 'react';
import useTShirt from '../../hooks/useTShirt';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirt();

    return (
        <div className='home-container'>
            <div className="tShirt-container">
                {
                    tShirts.map(tShirt => <Product
                        key={tShirt._id}
                        tShirt={tShirt}
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <h1>Order</h1>
            </div>
        </div>
    );
};

export default Home;
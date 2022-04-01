import React, { useContext } from 'react';
import { RingContext } from '../GrandMa/GrandMa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h1>Special</h1>
            <p>Name: {ring}</p>
        </div>
    );
};

export default Special;
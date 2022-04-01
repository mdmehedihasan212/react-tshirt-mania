import React, { createContext } from 'react';
import Father from '../Father/Father';
import Mother from '../Mother/Mother';
import Uncle from '../Uncle/Uncle';
import './GrandMa.css';

export const RingContext = createContext('diamond')

const GrandMa = () => {
    return (
        <RingContext.Provider value='alur ring'>
            <div className='grandma'>
                <h1>GrandMa</h1>
                <section style={{ display: 'flex' }}>
                    <Father></Father>
                    <Mother></Mother>
                    <Uncle></Uncle>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandMa;
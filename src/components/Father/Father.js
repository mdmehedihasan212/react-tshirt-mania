import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import MySelf from '../MySelf/MySelf';

const Father = () => {
    return (
        <div>
            <h3>Father</h3>
            <Brother></Brother>
            <Sister></Sister>
            <MySelf></MySelf>
        </div>
    );
};

export default Father;
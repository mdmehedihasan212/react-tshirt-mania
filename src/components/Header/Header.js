import React from 'react';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='navigation-container'>
            <h1>Welcome T-shirt Mania!!!</h1>
            <div className='navigation-link'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/shop'}>Shop</CustomLink>
                <CustomLink to={'/order-review'}>Order Review</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;
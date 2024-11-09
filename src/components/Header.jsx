import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;
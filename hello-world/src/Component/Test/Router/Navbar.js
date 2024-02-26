import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='Home'>
                <Link to="/">Home</Link>
            </div>
            <div className='About'>
                <Link to="/About">Favourite</Link>
            </div>
            <div className='Contacts'>
                <Link to="/Contacts">Cart</Link>
            </div>
        </div>
    )

}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='Home'>
                <Link to="/">Home</Link>
            </div>
            <div className='About'>
                <Link to="/About">About</Link>
            </div>
            <div className='Contacts'>
                <Link to="/Contacts">Contacts</Link>
            </div>
        </div>
    )

}

export default Navbar;
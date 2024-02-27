import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='Form'>
                <Link className='btn' to="/Form">Contact Form</Link>
            </div>
            <div className='FakeAPI'>
                <Link className='btn' to="/FakeAPI">FakeAPI</Link>
            </div>
            <div className='Counter'>
                <Link className='btn' to="/Counter">Counter Using Class</Link>
            </div>
            <div className='CounterHooks'>
                <Link className='btn' to="/CounterHooks">Counter Using Hooks</Link>
            </div>
            <div className='TicTacToe'>
                <Link className='btn' to="/TicTacToe">TicTacToe</Link>
            </div>
        </div>
    )

}

export default Navbar;
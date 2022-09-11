import React from 'react';
import Logo from '../Logo/Logi';
import './Navbar.css'
function Navbar(props) {
    return (
        <header className='header'>
            <div className='Brand'><Logo /></div> 
              <ul className='nav_link'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>SignIn</a></li>
                <li><a href='/'>Profile</a></li>
                <li><a href='/'>DL</a></li>
              </ul>
        </header>
    );
}

export default Navbar;
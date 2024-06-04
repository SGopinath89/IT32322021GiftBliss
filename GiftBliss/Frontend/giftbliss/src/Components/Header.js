import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../CSS/Header.css'; 

const Header = () => {
  return (
    <div className='header'>
        <div className='top_header'>
            <div className='user'>
                <div className='login_btn'>
                    <button>Login</button>
                </div>
                <div className='signup_btn'>
                    <button>Signup</button>
                </div>
            </div>
            <div className='search_box'>
                <input type='text'  placeholder='search' className='search_input'></input>
                <button className='search_button'><FaSearch /></button>
            </div>
        </div>
        
        <div className='mid_header'>
            <div className='logo'>
                <img alt="" src='images/header_logo1.png'></img>
            </div>

            <div className='nav'>
                <ul>
                    <li><Link to='/' className='link'>HOME</Link></li>
                    <li><Link to='/aboutus' className='link'>ABOUT US</Link></li>
                    <li><Link to='/contactus' className='link'>CONTACT US</Link></li>
                </ul>
            </div>
        </div>

        <hr className='separator'></hr>
    </div>
  );
};

export default Header;

import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../CSS/UserHeader.css';

const UserHeader = () => {
  const userName = "Sajath Muhamath"; // example user name
  const userInitials = userName.split(' ').map(name => name[0]).join('').substring(0, 2);

  return (
    <div className='header'>
        <div className='top_header'>
            <div className='user_profile'>
                <img src='images/user_image.png' alt='User' className='user_image' />
                <div className='user_initials'>{userInitials}</div>
            </div>
            <div className='search_box'>
                <input type='text' placeholder='Search'></input>
                <button className='search_btn'><FaSearch /></button>
            </div>
        </div>
        
        <div className='mid_header'>
            <div className='logo'>
                <img alt="Logo" src='images/header_logo.png'></img>
            </div>
            <div className='nav'>
                <ul>
                    <li><Link to='/' className='link'>HOME</Link></li>
                    <li><Link to='/aboutus' className='link'>ABOUT US</Link></li>
                    <li><Link to='/contactus' className='link'>CONTACT US</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
};

export default UserHeader;

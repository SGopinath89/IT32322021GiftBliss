import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../CSS/UserHeader.css';
import HomePage from './HomePage';

const UserHeader = () => {
  const userName = "Sajath Muhamath"; // example user name
  const userInitials = userName.split(' ').map(name => name[0]).join('').substring(0, 2);

  return (
    <div className='user-header'>
      <div className='top_header1'>
        <div className='user_profile1'>
          <img src='images/user_image.png' alt='User' className='user_image1' />
          <div className='user_initials1'>{userInitials}</div>
        </div>
        <div className='search_box1'>
          <input type='text' placeholder='Search'></input>
          <button className='search_btn1'><FaSearch /></button>
        </div>
      </div>
      <div className='mid_header1'>
        <div className='logo1'>
          <img alt="Logo" src='images/logo.png'></img>
        </div>
        <div className='nav1'>
          <ul>
            <li><Link to='/' className='link'>HOME</Link></li>
            <li><Link to='/aboutus' className='link'>ABOUT US</Link></li>
            <li><Link to='/contactus' className='link'>CONTACT US</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;

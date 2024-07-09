import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS/UserHeader.css';

const UserHeader = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Fetch user profile data after successful signin
        const fetchUserProfile = async () => {
            try {
                // Replace with your actual backend endpoint
                const response = await axios.get('http://localhost:8080/user/profile', {
                    params: {
                        email: 'user@email.com' // Replace with logged-in user's email
                    }
                });
                setUserName(response.data.full_name); // Assuming 'full_name' is returned from backend
            } catch (error) {
                console.error('Failed to fetch user profile:', error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div className='user-header'>
            <div className='top_header1'>
                <div className='user_profile1'>
                    <img src='images/user_image.png' alt='User' className='user_image1' />
                    <div className='user_initials1'>{userName ? userName.charAt(0) : ''}</div>
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
                        <li><Link to='/AboutUs' className='link'>ABOUT US</Link></li>
                        <li><Link to='/contactus' className='link'>CONTACT US</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserHeader;

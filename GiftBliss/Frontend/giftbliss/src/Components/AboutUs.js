import React from 'react'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import '../CSS/AboutUs.css';
import { FaUserTie } from 'react-icons/fa'
import UserHeader from './UserHeader';
import Footer from './Footer';

const AboutUs = () => {
    const navigate = useNavigate();

    const navigateTo = useCallback((path) => {
        navigate(path);
    }, [navigate]);

  return (
    <div className='aboutUs'>
        
        <UserHeader/>
        <div className='topAboutus'>
            <div className='aboutimg'>
                <img src='./images/aboutus.png' alt='aboutus'></img>
                <p>WELCOME TO JOYFUL GIFTING!</p>
            </div>
            <div className='topaboutPara'>
                {/* <div className="paragraphContainer"> */}
                    <p>At Gift Bliss, we're dedicated to the joy of giving. Our curated selection of gifts, spanning birthdays, anniversaries, and thoughtful gestures, aims to bring happiness to both giver and recipient. With quality and creativity at our core, we offer diverse options to suit every taste. Beyond material items, we believe in fostering connections and creating lasting memories through meaningful expressions of love and appreciation. Let Gift Bliss be your partner in spreading joy, one heartfelt gift at a time.</p>
                {/* </div> */}
                <div className="joinButton" onClick={() => navigateTo("")}>Join with us</div>
            </div>
            
        </div>
        <div className='topmiddlehr'>
            <hr/>
        </div>

        <div className='middleAboutUs'>
            <h2>Our Story</h2>
            <p>Founded in 2015 by two friends united by a passion for spreading happiness, Gift Bliss began with a simple yet profound mission: to make gift-giving effortless and meaningful. Since then, it has blossomed into both an online store and a vibrant community of gift enthusiasts. With its curated selection of thoughtful gifts, Gift Bliss continues to inspire joy and connection, ensuring that every occasion is celebrated in a special way.</p>
        </div>

        <div className='team'>
            <h3>OUR TEAM</h3>
            <div className='teamdetail'>
                <div className='person'>
                    <div className='image-section'>
                        {/* <img alt='' src='./images/usericon.jpg'></img> */}
                        <FaUserTie size={150} ></FaUserTie>
                    </div>
                    <div className='content'>
                        <h3 className='name'>Sarah Johnsen</h3>
                        <h4 className='position'>Co-Founder & Chief Gift Officer</h4>
                    </div>
                </div>

                <div className='person'>
                    <div className='image-section'>
                        {/* <img alt='' src='./images/usericon.jpg'></img> */}
                        <FaUserTie size={150} ></FaUserTie>
                    </div>
                    <div className='content'>
                        <h3 className='name'>Alexa M.Smith</h3>
                        <h4 className='position'>Co-Founder & Creative Director</h4>
                    </div>
                </div>

                <div className='person'>
                    <div className='image-section'>
                        {/* <img alt='' src='./images/usericon.jpg'></img> */}
                        <FaUserTie size={150} ></FaUserTie>
                    </div>
                    <div className='content'>
                        <h3 className='name'>Emily White</h3>
                        <h4 className='position'>Head of Customer Experience</h4>
                    </div>
                </div>

                <div className='person'>
                    <div className='image-section'>
                        {/* <img alt='' src='./images/usericon.jpg'></img> */}
                        <FaUserTie size={150} ></FaUserTie>
                    </div>
                    <div className='content'>
                        <h3 className='name'>Ava Martinez </h3>
                        <h4 className='position'>HR Manager</h4>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        
    </div>
  )
}

export default AboutUs

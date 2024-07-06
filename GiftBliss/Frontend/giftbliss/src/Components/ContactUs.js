import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./UserHeader";
//import Footer from "./Footer";
import "../CSS/ContactUs.css";
import Footer from "./Footer";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-us">
      <Header />
      <main className="contact-main">
      <section className="contact-info">
  <div className="contact-item">
    <img className="icon" alt="Location" src="../images/location.svg" />
    <div className="contact-details">
      <div className="label">Address</div>
      <div className="detail">
        Gift Bliss<br />
        78, Vavuniya-Parayanalankulam Hwy,<br />
        Vavuniya
      </div>
    </div>
  </div>
  <div className="contact-item">
    <img className="icon" alt="Phone" src="../images/Phone.svg" />
    <div className="contact-details">
      <div className="label">Phone</div>
      <div className="detail">
        +94 765432109<br />
        +94 24 222 2222<br />
        Fax: +94 24 222 2265
      </div>
    </div>
  </div>
  <div className="contact-item">
    <img className="icon" alt="Email" src="../images/mail.svg" />
    <div className="contact-details">
      <div className="label">Email</div>
      <div className="detail">giftbliss@gmail.com</div>
    </div>
  </div>
</section>

        <section className="contact-form">
          <h2 className="form-title">Message Us</h2>
          <div className="form-group">
            <label htmlFor="first-name" className="form-label">First Name</label>
            <input type="text" id="first-name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name" className="form-label">Last Name</label>
            <input type="text" id="last-name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="comments" className="form-label">Comments</label>
            <textarea id="comments" className="form-input textarea-input"></textarea>

          </div>
          <button className="submit-button">Submit</button>
        </section>
        <section className="contact-message">
          <h2 className="connect-title">Connect With Us!</h2>
          <p className="connect-description">
            We’re here to help you find the perfect gift. If you have any
            questions, need assistance with your order, or just want to say hello,
            don’t hesitate to reach out. Our team is eager to make your gifting
            experience as delightful as possible. Send us a message, and we’ll get
            back to you in a jiffy!
          </p>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default ContactUs;

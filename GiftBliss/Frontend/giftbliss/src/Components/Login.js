import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../CSS/Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        navigate('/signup');
    };

    return (
        <div className="container">
            <div className="welcome-section">
                <h3>Gift Bliss</h3>
                <h3>Shop Anytime</h3>
                <p>
                    Welcome Back, Explorer! Log in to continue your journey with us. Access your personalized dashboard and exclusive content by entering your credentials below.
                    Ready for more discoveries? Let's dive in! 😊
                </p>
                <img src="images/signIn.svg" alt="Sign In Illustration" />
            </div>
            <div className="login-section">
                <h2>Sign In</h2>
                <form id="loginForm" onSubmit={handleSignIn}>
                    <label htmlFor="username">User Name or Email</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit">Sign In</button>
                    <div className="links">
                        <a href="#" className="forget-password">Forget password?</a>
                        <a href="#" className="sign-up" onClick={handleSignUp}>Don't you have an account? <span>Sign Up</span></a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

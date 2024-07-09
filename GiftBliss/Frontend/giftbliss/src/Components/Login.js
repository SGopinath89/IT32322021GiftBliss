import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        
        // Check for hardcoded credentials
        if (formData.username === 'admin' && formData.password === '1234') {
            navigate('/dashboard');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/user/signin', {
                email: formData.username,
                password: formData.password
            });
            // Handle successful sign-in
            console.log(response.data);
            navigate('/');
        } catch (error) {
            setError('Invalid credentials. Please try again.');
            console.error('Error signing in:', error.response ? error.response.data : error.message);
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        navigate('/signup');
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        navigate('/forgot-password');
    };

    return (
        <div className="login-container">
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
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Sign In</button>
                    <div className="links">
                        <a href="#" className="forget-password" onClick={handleForgotPassword}>Forgot password?</a>
                        <a href="#" className="sign-up" onClick={handleSignUp}>Don't you have an account? <span>Sign Up</span></a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
import React from 'react';
import './signupPage.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Handle signup logic here
        navigate('/welcome'); // Redirect after signup
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="left-side">
                    <img style={{width:'400px', height:'400px', margin:'30px', marginTop:'90px'}}
                        src="https://clipartspub.com/images/thumbs-up-clipart-cartoon-6.png"
                        alt="Signup"
                        className="left-image"
                    />
                </div>
                <div className="right-side">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Enter your full name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Confirm your password" required />

                        <button type="submit" className="signup-btn">Sign Up</button>
                    </form>
                    <p className="login-text">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

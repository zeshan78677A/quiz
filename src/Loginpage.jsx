import React from 'react';
import './loginPage.css';
import { useNavigate, Link } from 'react-router-dom';

const Loginpage = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        navigate('/dashboard'); // Redirect after login
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="left-side">
                    <img 
                        style={{ width: '400px', height: '400px', marginTop: '40px' }}
                        src="https://png.pngtree.com/png-vector/20210326/ourmid/pngtree-quiz-icon-with-chronometer-png-image_3123223.jpg"
                        alt="Question Answer"
                        className="left-image"
                    />
                </div>
                <div className="right-side">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />

                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <p className="signup-text">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;

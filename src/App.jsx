import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './Loginpage';
import SignupPage from './SignupPage';
import Dashboard from './Dashboard'; // Assuming you have a Dashboard component

function App() {
    return (
        <Router>
            <Routes>
                {/* Define the route for login */}
                <Route path="/login" element={<Loginpage />} />

                {/* Define the route for signup */}
                <Route path="/signup" element={<SignupPage />} />

                {/* Define the route for dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Optionally redirect from "/" to "/login" */}
                <Route path="/" element={<Loginpage />} />
            </Routes>
        </Router>
    );
}

export default App;

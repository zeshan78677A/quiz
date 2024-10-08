import React, { useState, useEffect } from 'react';
import './dashboard.css';

const Dashboard = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(20).fill('')); // Array to store answers
    const [marks, setMarks] = useState(null);
    const [timer, setTimer] = useState(30 * 60); // 30 minutes in seconds
    const [showCelebration, setShowCelebration] = useState(false); // To show celebration animation
    const [questions] = useState([
        "Question 1: What is react?",
        "Question 2: What is java script?",
        "Question 3: What is css?",
        "Question 4: What is html?",
        "Question 5: What is java?",
        "Question 6: What is the purpose of CSS?",
        "Question 7: What is json?",
        "Question 8: What is react?",
        
    ]);

    // Timer logic
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prevQuestion => prevQuestion - 1);
        }
    };

    const handleSubmit = () => {
        if (currentQuestion === questions.length - 1) {
            // Logic for calculating marks (dummy logic for demo)
            const score = Math.floor(Math.random() * 100);
            setMarks(score);
            setShowCelebration(true); // Trigger celebration animation
        }
    };

    const handleChange = (e) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = e.target.value;
        setAnswers(newAnswers);
    };

    // Timer display
    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? `0${sec}` : sec}`;
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="logo">
                    <img src="http://charlesriverinteractive.com/wp-content/uploads/2018/06/quiztime-1.gif" alt="Logo" />
                </div>
                <h1>Quiz Dashboard</h1>
            </header>

            <main className="quiz-section">
                {marks !== null ? (
                    <div className="result-section">
                        <h2>Your Score: {marks}/100</h2>
                        <div className="result-effect">Congratulations!</div>

                        {/* Celebration Animation */}
                        {showCelebration && <div className="celebration"></div>}
                    </div>
                ) : (
                    <div className="question-section">
                        <div className="question-header">
                            <h2>{questions[currentQuestion]}</h2>
                            <p>Time Remaining: {formatTime(timer)}</p>
                        </div>
                        <input
                            type="text"
                            value={answers[currentQuestion]}
                            onChange={handleChange}
                            placeholder="Enter your answer"
                            className="answer-input"
                        />
                        <div className="quiz-navigation">
                            <button onClick={handlePrevious} disabled={currentQuestion === 0}>
                                Previous
                            </button>
                            <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
                                Next
                            </button>
                            <button onClick={handleSubmit} disabled={currentQuestion < questions.length - 1}>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;

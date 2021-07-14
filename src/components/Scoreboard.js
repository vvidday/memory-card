import React from 'react';
import '../styles/scoreboard.css';

export const Scoreboard = (props) =>{


    return (
        <div className="scoreboard-container">
            <div className="score" id="current-score">Current Score: {props.currentScore}</div>
            <div className="score" id="high-score">Total Score: {props.highScore}</div>
        </div>
    )
}
import React from 'react';
import '../styles/notification.css';

export const Notification = (props) => (
    <div className = "notification-container">
        <div className="notification-box">
            <p>{props.text}</p>
            <button className="notification-button" onClick = {props.toggle}>Back</button>
        </div>
    </div>
);
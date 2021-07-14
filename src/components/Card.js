import React from 'react';
import '../styles/card.css';

export const Card = (props) => {
    return (
        <div className = "card">
            <img src={props.src} alt="Bear" onClick =  {() => props.guess(props.src)}></img>
        </div>
    );
}
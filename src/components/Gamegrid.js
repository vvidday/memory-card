import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import '../styles/gamegrid.css';
import bear01 from '../images/bear01.webp';
import bear02 from '../images/bear02.webp';
import bear03 from '../images/bear03.webp';
import bear04 from '../images/bear04.webp';
import bear05 from '../images/bear05.webp';
import bear06 from '../images/bear06.webp';
import bear07 from '../images/bear07.webp';
import bear08 from '../images/bear08.webp';
import bear09 from '../images/bear09.webp';
import bear10 from '../images/bear10.webp';
import bear11 from '../images/bear11.webp';
import bear12 from '../images/bear12.webp';

export const Gamegrid = (props) => {

    const [picarr, setPicarr] = useState([
        bear01,
        bear02,
        bear03,
        bear04,
        bear05,
        bear06,
        bear07,
        bear08,
        bear09,
        bear10,
        bear11,
        bear12
    ]);

    const [guesses, setGuesses] = useState([]);

    useEffect(()=>{
        scrambleGrid();
    }, [guesses]);

    const guess = (src) =>{
        if(guesses.includes(src)){
            let new_arr = [];
            setGuesses(new_arr);
            props.updateScore();
        }
        else{
            let new_arr = guesses.slice(0);
            new_arr.push(src);
            setGuesses(new_arr);
            props.increaseScore();
            if(new_arr.length === 12){
                setGuesses([]);
            }
        }
    }

    const generateGrid = () =>{
        let tmp = [];
        for(let i of picarr){
            tmp.push(
                <Card src={i} guess={guess}/>
            )
        }
        return tmp
    }

    const scrambleGrid = () =>{
        let copy = picarr.slice(0);
        let new_arr = [];
        for(let i = copy.length; i > 0; i--){
            let index = Math.floor(Math.random() * i)
            new_arr.push(copy.splice(index, 1)[0]);
        }
        setPicarr(new_arr);
    }




    return(
        <div id="gamegrid">
            {generateGrid()}
        </div>
    );
}
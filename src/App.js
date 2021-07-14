import './styles/app.css';
import { Gamegrid } from './components/Gamegrid';
import { Scoreboard } from './components/Scoreboard';
import { Notification } from './components/Notification';
import help from './images/helpicon.svg';
import React, {useState} from 'react';

function App() {

  const [score, setScore] = useState([0, 0]);

  const increaseScore = () => {
    setScore([score[0] + 1, score[1]]);

    if(score[0] === 11){
      setScore([0, 12]);
      setNotifText( "Congratulations, you win! Well done.");
      toggleNotif();
    }
    
  } 

  const updateScore = () => {
    console.log("ran");
    const current = score[0];
    const old = score[1];
    const high = Math.max(current, old);
    setScore([0, high]);
    
    let text = "";
    if(current === 12) text = "Congratulations, you win! Well done.";
    else if(current > old) text = "Game Over! You selected the same picture twice. On the bright side, you achieved a new high-score of " + current + ".";
    else if (current === old) text = "Game Over! You selected the same picture twice. You tied your previous best score of " + current +".";
    else text = "Game Over! You selected the same picture twice. Your current high-score is " + old +".";
    
    setNotifText(text);
    toggleNotif();
  }

  const [notifhidden, setNotifhidden ] = useState(true);
  const [notiftext, setNotifText ] = useState("");

  const toggleNotif = () => setNotifhidden(!notifhidden);

  return (
    <div>
      {notifhidden 
      ? <button id="info-button" onClick = {()=>{
        setNotifText("Welcome to the Bear Memory Game! Your goal is to click on all twelve bear photos without clicking on the same one twice. Good luck!")
        toggleNotif();
      }}><img alt="info button" src={help}></img></button>
       : <Notification toggle = {toggleNotif} text={notiftext}/> }

      
      <h1>Bear Memory Game</h1>
      <Scoreboard currentScore = {score[0]} highScore = {score[1]} />
      <Gamegrid increaseScore = {increaseScore} updateScore = {updateScore}/>
    </div>
  );
}

export default App;

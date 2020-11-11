import React, {useReducer} from 'react'
import {InfoDisplay, Timer, DisplayGame} from './components';
//import Button from 'react-bootstrap/Button';
import {START_GAME, END_GAME, CHANGE_TIME, DURATION_GAME} from './constants';
import {reducerTimer} from './reducer';
import './App.css';

const initialState = {
  isStart: false,
  time: DURATION_GAME,
  history: [],
}

function App() {
  const [state, dispatch] = useReducer(
    reducerTimer,
    {
      ...initialState}
  );

  const startGame = () => {
    dispatch({type: START_GAME});
  }

  const createNewGame = () => {
    endGame();
    setTimeout(startGame, 0)
  }
  const changeTime = () => {
    dispatch({type: CHANGE_TIME })
  };

  const endGame = () => {
    dispatch({type: END_GAME});
  }

  const {time, isStart} = state;
  return (
    <div className="App">
      <header className="App-header">
        <button
          variant="primary"
          onClick={startGame}
        >Start</button>
        <button
          variant="primary"
          onClick={createNewGame}
        >New Game</button>
        <InfoDisplay title={'0'} />
        <Timer
          endGame={endGame}
          isGame={isStart}
          time={time}
          changeTime={changeTime}
        />
      </header>
      <DisplayGame />
    </div>
  );
}

export default App;

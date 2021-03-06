import React, { useContext, Fragment} from 'react'
import { InfoDisplay, Timer, DisplayGame, RatingComponent, ModalSaveResult } from './components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HistoryUsers from './HOC/HistoryUsers';
import { actions } from './constants';
import { ContextApp } from './reducer';
import './App.css';

function App() {
const {state, dispatch} = useContext(ContextApp);
  const {time, isStart, activeBlocks, cash, currentTotalPoints, isShowModal, users} = state;

  const endGame = (resolvePromise = ()=>{}) => dispatch({ type: actions.END_GAME, resolvePromise});
  const changeTime = () => dispatch({ type: actions.CHANGE_TIME, endGame });
  const startGame = () =>  dispatch({ type: actions.START_GAME, changeTime });
  const createNewGame = () => new Promise((resolvePromise) => {
        endGame(resolvePromise);
    }).then(startGame)
  const saveUserResult = (data) => dispatch({ type: actions.SAVE_RESULT, ...data });
  const resetUserResult = () => dispatch({ type: actions.RESET_RESULT });
  const createScore = (targetPosition) => dispatch({ type: actions.CREATE_SCORE, targetPosition });

  return (
    <Fragment>
      <Container>
        <h1>Good game</h1>
        <Row>
          <Col lg={10} md={10}>
          <header className="header">
            <div>
              <Button
                className="start-game-button"
                variant="primary"
                onClick={startGame}
                disabled={isStart}
              >
                Start
              </Button>
              <Button
                variant="primary"
                onClick={createNewGame}
                disabled={!isStart}
              >
                New Game
              </Button>
            </div>
            <InfoDisplay title={currentTotalPoints} />
            <Timer
              endGame={endGame}
              isGame={isStart}
              time={time}
              changeTime={changeTime}
              currentTotalPoints={currentTotalPoints}
            />
          </header>
          <DisplayGame
            createScore={createScore}
            activeBlocks={activeBlocks}
            cash={cash}
          />
          </Col>
          <RatingComponent users={users}/>
        </Row>
      </Container>
      <ModalSaveResult
        isShowModal={isShowModal}
        handleSave={saveUserResult}
        handleCancel={resetUserResult}
      /> 
    </Fragment>
  );
}

export default HistoryUsers(App);

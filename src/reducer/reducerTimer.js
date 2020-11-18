import React from "react";
import { TOTAL_ACTIVE_BLOCKS, STEP_FOR_GAME, DURATION_GAME, actions } from '../constants';
import { getRandomBlockType, getRandomNumber } from '../utils/common';
export const ContextApp = React.createContext();

let _timeout = null;
let resolvePromiseNewGame = null;

export default function reducer(state, action) {
  switch (action.type) {
    case actions.START_GAME: {
      let activeBlocks = [];
      while (activeBlocks.length < TOTAL_ACTIVE_BLOCKS) {
        const randomNumber = getRandomNumber(activeBlocks);
        if (!activeBlocks.includes(randomNumber)) {
          state.cash[randomNumber] = getRandomBlockType();
          activeBlocks.push(randomNumber);
        }
      }

      _timeout = setInterval(action.changeTime, 1000);

      return {
        ...state,
        time: DURATION_GAME,
        isStart: true,
        activeBlocks,
        currentTotalPoints: 0,
      };
    }

    case actions.NEW_GAME: {
      clearInterval(_timeout);

      return {
        ...state,
        isStart: false,
        isNewGame: true,
        isShowModal: true,
        time: 0,
      };
    }

    case actions.RESET_RESULT: {
      resolvePromiseNewGame();
      return {
        ...state,
        activeBlocks: [],
        currentTotalPoints: 0,
        isShowModal: false,
        isStart: false,
        cash: Object.assign({}, state.cash),
        time: 0,
      }
    }

    case actions.SAVE_RESULT: {
      const { name } = action;
      const users = [...state.users, { name, points: state.currentTotalPoints }];
      localStorage.setItem('historyUsers', JSON.stringify(users));
      resolvePromiseNewGame()

      return {
        ...state,
        activeBlocks: [],
        currentTotalPoints: 0,
        isShowModal: false,
        users,
        time: 0,
      }
    }

    case actions.END_GAME: {
      clearInterval(_timeout);
      resolvePromiseNewGame = action.resolvePromise;

      return {
        ...state,
        isStart: false,
        isShowModal: true,
        time: 0,
      };
    }
    case actions.CREATE_SCORE: {
      let currentTotalPoints = state.currentTotalPoints;
      let cash = {...state.cash};
      const activeBlocks = state.activeBlocks.filter(_ => {
        if (_ !== action.targetPosition) {
          return true;
        }
        if (cash[action.targetPosition].totalTimeClick - 1  > cash[action.targetPosition].counterTimeClick) {
          cash[action.targetPosition].counterTimeClick = cash[action.targetPosition].counterTimeClick + 1;
          return true; 
        }
        currentTotalPoints = currentTotalPoints + cash[action.targetPosition].points;
        return false;
      });

      if (activeBlocks.length === 1) {
        const randomNumber = getRandomNumber(state.activeBlocks);
        cash[randomNumber] = getRandomBlockType();
        activeBlocks.push(randomNumber);
      }
      return {
        ...state,
        cash,
        currentTotalPoints,
        activeBlocks,
      }
    }

    case actions.CHANGE_TIME: {
      if (state.time < 1 ) {
        action.endGame();
        return {...state};
      }
      const time = state.time ? state.time - STEP_FOR_GAME : 0;
      return {  ...state, time }
    }

    default:
      throw new Error();
  }
}


import React from "react";
import {
  TOTAL_ACTIVE_BLOCKS,
  MAX_TOTAL_BLOCKS,
  TYPE_CUBE_LIST,
  STEP_FOR_GAME,
  DURATION_GAME,
  actions,
} from '../constants';
import { createRamdonNunber } from '../utils/common';

const getRandomNumber = () => createRamdonNunber(MAX_TOTAL_BLOCKS);
const getRandomBlockType = () =>  TYPE_CUBE_LIST[createRamdonNunber(TYPE_CUBE_LIST.length)];

export const ContextApp = React.createContext();
let _timeout = null;
export default function reducer(state, action) {
  switch (action.type) {
    case actions.START_GAME: {
      let activeBlocks = [];

      while (activeBlocks.length < TOTAL_ACTIVE_BLOCKS) {
        const randomNumber = getRandomNumber();
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

    case actions.RESET_RESULT: {
      return {
        ...state,
        activeBlocks: [],
        currentTotalPoints: 0,
        isShowModal: false,
        isStart: false,
        time: 0,
      }
    }

    case actions.SAVE_RESULT: {
      const { name } = action;
      const users = [...state.users, { name, points: state.currentTotalPoints }];
      localStorage.setItem('historyUsers', JSON.stringify(users));

      return {
        ...state,
        activeBlocks: [],
        currentTotalPoints: 0,
        isShowModal: false,
        users,
        time: 0,
      }
    }

    case actions.END_GAME:
      clearInterval(_timeout);

      return {
        ...state,
        isStart: false,
        activeBlocks: [],
        isShowModal: true,
        time: 0,
      };

    case actions.CREATE_SCORE: {
      const activeBlocks = state.activeBlocks.filter(_ => {
        if (_ !== action.targetPosition) {
          return true;
        }
        state.currentTotalPoints +=  state.cash[action.targetPosition].points;
        return false;
      });

      if (activeBlocks.length === 1) {
        const randomNumber = getRandomNumber()
        state.cash[randomNumber] = getRandomBlockType();
        activeBlocks.push(randomNumber);
      }
      return {
        ...state,
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
     return state;
  }
}


import React, {useReducer, useCallback} from 'react'
import HistoryUsers from './HOC/HistoryUsers';
import Game from './Game';

import { initialState } from './constants';
import { reducerTimer, ContextApp } from './reducer';
import './App.css';

function App({historyUsers}) {
  const memoizedReducer = useCallback(reducerTimer, []);
  const [state, dispatch] = useReducer(
    memoizedReducer,
    {
      ...initialState,
      users: historyUsers,
    }
  );

  return (
    <ContextApp.Provider value={{dispatch, state}}>
      <Game />
    </ContextApp.Provider>
  );
}

export default HistoryUsers(App);

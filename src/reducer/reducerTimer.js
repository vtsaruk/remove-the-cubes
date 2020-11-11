import {START_GAME, END_GAME, CHANGE_TIME, STEP_FOR_GAME, DURATION_GAME} from '../constants';
export default function reducer(state, action) {
  switch (action.type) {
    case START_GAME:
      return {...state, isStart: true };
    case END_GAME:
      return {...state, isStart: false };

    case CHANGE_TIME:
      return {... state, time: state.time - STEP_FOR_GAME}
    default:
     return state;
  }
}


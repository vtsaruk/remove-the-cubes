const END_GAME = 'END_GAME';
const CHANGE_TIME = 'CHANGE_TIME';
const START_GAME = 'START_GAME';
const CREATE_SCORE = 'CREATE_SCORE';
const HIDE_MODAL = 'HIDE_MODAL';
const SAVE_RESULT = 'SAVE_RESULT';
const RESET_RESULT = 'RESET_RESULT';
const ADD_USER = 'ADD_USER';

export const actions = {
    END_GAME,
    CHANGE_TIME,
    START_GAME,
    HIDE_MODAL,
    SAVE_RESULT,
    RESET_RESULT,
    ADD_USER,
    CREATE_SCORE,
}

export const DURATION_GAME = 20 * 1000;
export const STEP_FOR_GAME = 1000;
export const TOTAL_ACTIVE_BLOCKS = 2;
export const MAX_TOTAL_BLOCKS= 100;
export const initialState = {
    isStart: false,
    time: 0,
    activeBlocks: [],
    users: [],
    currentTotalPoints: 0,
    cash: {},
    isShowModal: false,
}

export const MAX_TOTAL_CLICK_ON_ACTIVE_BLOCK = 4; 

export const TYPE_CUBE_LIST = [
    {
        color: 'red',
        points: 10,
    },
    {
        color: 'green',
        points: 20,
    },
    {
        color: 'black',
        points: 30,
    },
    {
        color: 'blue',
        points: 40,
    },
    {
        color: 'orange',
        points: 50,
    }
]

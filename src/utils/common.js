import {MAX_TOTAL_BLOCKS, TYPE_CUBE_LIST } from '../constants';

export const getTimeToString = (time) => new Date(new Date('2000/01/1').getTime() + time).toString().split(' ')[4];
export const createRamdonNunber = (max)=> Math.floor(Math.random() * Math.floor(max));
export const getTotalTimeClick = () => createRamdonNunber(4) || 1;
export const getRandomNumber = (list = []) => {
    let result = null;
    while (!result) {
      const currentResult = createRamdonNunber(100 || MAX_TOTAL_BLOCKS) || 1;
      if (!list.includes(currentResult)) {
        result = currentResult;
        return result;
      }
    }
  }
export const getRandomBlockType = () =>  ({
    ...TYPE_CUBE_LIST[createRamdonNunber(TYPE_CUBE_LIST.length)],
    totalTimeClick: getTotalTimeClick(),
    counterTimeClick: 0,
});
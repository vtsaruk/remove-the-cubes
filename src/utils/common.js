export const getTimeToString = (time) => new Date(new Date('2000/01/1').getTime() + time).toString().split(' ')[4];
export const createRamdonNunber = (max)=> Math.floor(Math.random() * Math.floor(max));

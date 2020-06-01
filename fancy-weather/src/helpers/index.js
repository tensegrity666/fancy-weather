/* eslint-disable no-param-reassign */

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const roundValue = (value) => Number(Math.round(value));


export {
  getRandomInt, roundValue,
};

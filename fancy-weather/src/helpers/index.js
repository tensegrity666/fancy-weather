/* eslint-disable no-param-reassign */

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const roundValue = (value) => Number(Math.round(value));

const convertToFahrenheit = (value) => Number(value * 1.8 + 32);

export {
  getRandomInt, roundValue, convertToFahrenheit,
};

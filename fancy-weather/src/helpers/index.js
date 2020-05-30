/* eslint-disable no-param-reassign */

const createRequestLink = (link, token, param1 = null, param2 = null, param3 = null, query) => `${link}${token}&${param1}&${param2}&${param3}&${query}`;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


export { createRequestLink, getRandomInt };

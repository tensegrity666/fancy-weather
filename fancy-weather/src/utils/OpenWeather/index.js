/* eslint-disable max-len */


import { openWeatherParams, createRequestLink } from '../../constants';
import TOKENS from '../../../tokens';

const {
  link, langFi, langRu, langEn, days, unitsCels, unitsFar, queryPostfix,
} = openWeatherParams;

const requestLinkRuCels = createRequestLink(link, TOKENS.openWeather, langRu, days, unitsCels, queryPostfix);
const requestLinkRuFar = createRequestLink(link, TOKENS.openWeather, langRu, days, unitsFar, queryPostfix);
const requestLinkEnCels = createRequestLink(link, TOKENS.openWeather, langEn, days, unitsCels, queryPostfix);
const requestLinkEnFar = createRequestLink(link, TOKENS.openWeather, langEn, days, unitsFar, queryPostfix);
const requestLinkFiCels = createRequestLink(link, TOKENS.openWeather, langFi, days, unitsCels, queryPostfix);
const requestLinkFiFar = createRequestLink(link, TOKENS.openWeather, langFi, days, unitsFar, queryPostfix);

const controller = new AbortController();
const { signal } = controller;


async function getWeatherData(param, request) {
  const fullRequest = `${param}${request}`;

  const response = await fetch(fullRequest, { signal });

  return response.json();
}


export default getWeatherData;
export {
  requestLinkRuCels, requestLinkRuFar, requestLinkFiCels, requestLinkFiFar, requestLinkEnCels, requestLinkEnFar,
};

/* eslint-disable max-len */


import { openWeatherParams, createRequestLink } from '../../constants';
import TOKENS from '../../../tokens';

const {
  link, langFi, langRu, limits, unitsCels, unitsFar, queryPostfix,
} = openWeatherParams;

const requestLinkRuCels = createRequestLink(link, TOKENS.openWeather, langRu, limits, unitsCels, queryPostfix);
const requestLinkRuFar = createRequestLink(link, TOKENS.openWeather, langRu, limits, unitsFar, queryPostfix);
const requestLinkFiCels = createRequestLink(link, TOKENS.openWeather, langFi, limits, unitsCels, queryPostfix);
const requestLinkFiFar = createRequestLink(link, TOKENS.openWeather, langFi, limits, unitsFar, queryPostfix);

const controller = new AbortController();
const { signal } = controller;


async function getWeatherData(param, request) {
  const fullRequest = `${param}${request}`;

  const response = await fetch(fullRequest, { signal });

  return response.json();
}


export default getWeatherData;
export {
  requestLinkRuCels, requestLinkRuFar, requestLinkFiCels, requestLinkFiFar,
};

/*

coord: {lat: 55.7522, lon: 37.6156}
country: "RU"
id: 524901
name: "Москва"

list: Array(1)
0:
clouds: {all: 87}
dt: 1590872400
dt_txt: "2020-05-30 21:00:00"
main:
feels_like: 13.68
grnd_level: 992
humidity: 85
pressure: 1008
sea_level: 1008
temp: 16.6
temp_kf: 0.9
temp_max: 16.6
temp_min: 15.7
__proto__: Object
rain: {3h: 0.88}
sys: {pod: "n"}
weather: Array(1)
0: {id: 500, main: "Rain", description: "небольшой дождь", icon: "10n"

*/

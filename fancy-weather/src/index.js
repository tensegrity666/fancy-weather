/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import './index.scss';

import Presenter from './presenter';
import GeoView from './components/geo';
import WeatherView from './components/weather';


import IPinfo from './utils/IPinfo';
import renderMap from './utils/MapBox';
import getUnsplashImage from './utils/Unsplash';
import getWeatherData,
{
  requestLinkRuCels,
} from './utils/OpenWeather';

import setBackgroundImage from './utils/DOM';

// ! entry point

import TOKENS from '../tokens';
import { IPinfoLink } from './constants';


async function getUserLocation() {
  const { loc } = await IPinfo(IPinfoLink, TOKENS.IPinfo);

  return loc;
}


getUserLocation()
  .then((data) => {
    const coordinates = data.split(',');

    // * const geo = new GeoView(coordinates);
    const presenter = new Presenter(coordinates);

    renderMap(TOKENS.mapBox, coordinates);
  });

// !

// getUnsplashImage('Rain')
//   .then((data) => {
//     const images = data.results[0];

//     setBackgroundImage(images.urls.regular);
//   })
//   .catch((err) => {
//     console.log(err);
//     setBackgroundImage('/assets/images/default.jpg');
//   });


// getWeatherData(requestLinkRuCels, 'Saint Petersburg')
//   .then((data) => {
//     const weather = data.list[0];

//     const weatherMod = new WeatherView(data.city, weather);
//     console.log(weatherMod);
//   });

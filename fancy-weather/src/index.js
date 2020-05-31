/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import './index.scss';

// import Presenter from './components/Presenter';
import GeoView from './components/Geo';
import WeatherView from './components/Weather';
import WeatherModel from './components/Weather/WeatherModel';
import AppModel from './components/App/AppModel';


import IPinfo from './utils/IPinfo';
import renderMap from './utils/MapBox';
import getUnsplashImage from './utils/Unsplash';
import getWeatherData,
{
  requestLinkRuCels,
} from './utils/OpenWeather';

import TOKENS from '../tokens';
import { IPinfoLink } from './constants';

async function getUserData() {
  const { loc } = await IPinfo(IPinfoLink, TOKENS.IPinfo);

  return loc;
}


getUserData()
  .then((data) => {
    const coordinates = data.split(',');

    const geo = new GeoView(coordinates);

    renderMap(TOKENS.mapBox, coordinates);
  });


getUnsplashImage('Rain')
  .then((data) => {
    const images = data.results[0];

    document.body.style.backgroundImage = `url(${images.urls.regular})`;
  })
  .catch((err) => {
    console.log(err);
    document.body.style.backgroundImage = 'url("/assets/images/default.jpg")';
  });

getWeatherData(requestLinkRuCels, 'Saint Petersburg')
  .then((data) => {
    const weather = data.list[0];

    const model = new WeatherModel(data.city, weather);

    const weatherMod = new WeatherView(model);
    console.log(weatherMod);
  });

const app = new AppModel();
console.log(app.currentLanguage);

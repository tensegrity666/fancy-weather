/* eslint-disable no-console */

import './index.scss';

// import Presenter from './components/Presenter';
import GeoView from './components/Geo';


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
  const {
    city, country, timezone, loc,
  } = await IPinfo(IPinfoLink, TOKENS.IPinfo);

  console.log(city, country, timezone, loc);
}

const coordinates = [30.3141, 59.9386];

getUserData();

// !
const geo = new GeoView(coordinates);
geo.addMap();

renderMap(TOKENS.mapBox, coordinates);

getUnsplashImage('summer', 1)
  .then((data) => {
    const images = data.results[0];

    console.log(images.urls.regular);
    document.body.style.backgroundImage = `url(${images.urls.regular})`;
  })
  .catch((err) => {
    console.log(err);
    document.body.style.backgroundImage = 'url("/assets/images/default.jpg")';
  });

getWeatherData(requestLinkRuCels, 'Saint Petersburg')
  .then((data) => {
    const weather = data.list[0];

    console.log(data.city.coord, data.city.name, weather.main.temp);
  });



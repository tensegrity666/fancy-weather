/* eslint-disable prefer-destructuring */
import GeoView from '../components/geo';
import WeatherView from '../components/weather';

import getUnsplashImage from '../utils/Unsplash';
import { setBackgroundImage, addToDOM } from '../utils/DOM';
import getWeatherData,
{ requestLinkRuCels } from '../utils/OpenWeather';

import { elementID } from '../constants';


class Presenter {
  constructor(coordinates) {
    this.geo = new GeoView(coordinates);

    this.fragmentGeo = this.geo.render();
    addToDOM(this.fragmentGeo, elementID.right);

    getUnsplashImage('sun')
      .then((data) => {
        this.images = data.results[0];

        setBackgroundImage(this.images.urls.regular);
      })
      .catch((err) => {
        // console.log(err);
        setBackgroundImage('/assets/images/default.jpg');
      });


    getWeatherData(requestLinkRuCels, 'Saint Petersburg')
      .then((data) => {
        this.weather = data.list[0];

        this.weatherMod = new WeatherView(data.city, this.weather);
        this.fragmentWeather = this.weatherMod.render();

        addToDOM(this.fragmentWeather, elementID.left);

        console.log(this.weatherMod);
      });
  }
}

export default Presenter;

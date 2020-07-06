/* eslint-disable no-console */

import GeoView from '../components/geo';
import WeatherView from '../components/weather';

import getUnsplashImage from '../utils/Unsplash';
import { setBackgroundImage, addToDOM } from '../utils/DOM';
import getWeatherData,
{ requestLinkRuCels, requestLinkRuFar } from '../utils/OpenWeather';

import defaultBackground from './assets/default.jpg';

import { elementID } from '../constants';


class Presenter {
  constructor(coordinates, userCity) {
    this.isCelsius = true;
    this.geo = new GeoView(coordinates);
    this.city = userCity;

    this.fragmentGeo = this.geo.render();
    addToDOM(this.fragmentGeo, elementID.right);

    this.togglerFahr = document.querySelector('#farenheit');
    this.togglerCels = document.querySelector('#celsius');

    const showForecast = (req) => {
      getWeatherData(req, this.city)
        .then((data) => {
          this.forecast = data.list;
          this.weatherView = new WeatherView(data.city, this.forecast);
          this.fragmentWeather = this.weatherView.render();

          addToDOM(this.fragmentWeather, elementID.left);

          getUnsplashImage(this.weatherView.model.request)
            .then((obj) => {
              const [images] = obj.results;

              setBackgroundImage(images.urls.regular);
            })
            .catch((err) => {
              console.log(err);
              setBackgroundImage(defaultBackground);
            });
        })
        .catch((err) => {
          console.log(err);
          setBackgroundImage(defaultBackground);
        });
    };

    window.addEventListener('load', showForecast(requestLinkRuCels));
    this.togglerFahr.addEventListener('click', (event) => showForecast(requestLinkRuFar, event));
    this.togglerCels.addEventListener('click', (event) => showForecast(requestLinkRuCels, event));
  }
}

export default Presenter;

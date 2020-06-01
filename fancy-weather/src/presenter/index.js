/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */

import GeoView from '../components/geo';
import WeatherView from '../components/weather';

import getUnsplashImage from '../utils/Unsplash';
import { setBackgroundImage, addToDOM } from '../utils/DOM';
import getWeatherData,
{ requestLinkRuCels } from '../utils/OpenWeather';

import { elementID } from '../constants';


class Presenter {
  constructor(coordinates, userCity) {
    this.geo = new GeoView(coordinates);

    this.fragmentGeo = this.geo.render();
    addToDOM(this.fragmentGeo, elementID.right);


    getWeatherData(requestLinkRuCels, userCity)
      .then((data) => {
        this.forecast = data.list;

        this.weatherView = new WeatherView(data.city, this.forecast);
        this.fragmentWeather = this.weatherView.render();

        addToDOM(this.fragmentWeather, elementID.left);


        getUnsplashImage(this.weatherView.model.request)
          .then((obj) => {
            this.images = obj.results[0];

            setBackgroundImage(this.images.urls.regular);
          })
          .catch((err) => {
            console.log(err);
            setBackgroundImage('/assets/images/default.jpg');
          });
      });
  }
}

export default Presenter;

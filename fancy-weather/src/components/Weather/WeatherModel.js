/* eslint-disable prefer-destructuring */

import { roundTemperature } from '../../helpers';


class WeatherModel {
  constructor(city, overcast) {
    this.container = document.querySelector('.container');

    this.city = city.name;
    this.country = city.country;
    this.temperature = overcast.main.temp;
    this.humidity = overcast.main.humidity;
    this.feels = overcast.main.feels_like;
    this.pressure = overcast.main.pressure;

    this.visualisation = overcast.weather[0];
    this.icon = this.visualisation.icon;
    this.request = this.visualisation.main;
    this.description = this.visualisation.description;

    this.date = new Date();
    this.UTCstring = this.date.toUTCString();

    this.round();
  }

  round() {
    this.temperature = roundTemperature(this.temperature);
    this.feels = roundTemperature(this.feels);
  }
}


export default WeatherModel;

/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */

import { roundValue } from '../../helpers';


class WeatherModel {
  constructor(city, forecast) {
    this.city = city.name;
    this.country = city.country;
    this.population = city.population;

    this.today = forecast[0];
    this.secondDay = forecast[8];
    this.thirdDay = forecast[16];
    this.fourdDay = forecast[24];

    this.temperature = this.today.main.temp;
    this.temperatureSecond = this.secondDay.main.temp;
    this.temperatureThird = this.thirdDay.main.temp;
    this.temperatureFourd = this.fourdDay.main.temp;

    this.wind = this.today.wind.speed;
    this.humidity = this.today.main.humidity;
    this.feels = this.today.main.feels_like;
    this.pressure = this.today.main.pressure;

    this.dataToday = this.today.weather[0];
    this.request = this.dataToday.main;

    this.dataSecondDay = this.secondDay.weather[0];
    this.dataThirdDay = this.thirdDay.weather[0];
    this.dataFourdDay = this.fourdDay.weather[0];

    this.iconCodeToday = this.dataToday.icon;
    this.descriptionToday = this.dataToday.description;

    this.iconCodeSecondDay = this.dataSecondDay.icon;
    this.iconCodeThirdDay = this.dataThirdDay.icon;
    this.iconCodeFourdDay = this.dataFourdDay.icon;

    this.round();
  }

  round() {
    this.temperature = roundValue(this.temperature);
    this.temperatureSecond = roundValue(this.temperatureSecond);
    this.temperatureThird = roundValue(this.temperatureThird);
    this.temperatureFourd = roundValue(this.temperatureFourd);
    this.feels = roundValue(this.feels);
    this.wind = roundValue(this.wind);
  }
}


export default WeatherModel;

/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */

import { roundValue } from '../../helpers';
import { DAYS } from '../../constants';


class WeatherModel {
  constructor(city, forecast) {
    this.city = city.name;
    this.country = city.country;
    this.population = city.population;

    // ! UGLY
    this.today = forecast[0];
    this.secondDay = forecast[1];
    this.thirdDay = forecast[2];
    this.fourdDay = forecast[3];

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
    // !

    this.beautyDate = this.formatDate(new Date());

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


  formatDate(date) {
    this.day = date.getDay();
    this.dayText = DAYS[this.day];

    this.dd = date.getDate();
    if (this.dd < 10) {
      this.dd = `0${this.dd}`;
    }

    this.mm = date.getMonth() + 1;
    if (this.mm < 10) {
      this.mm = `0${this.mm}`;
    }

    this.yy = date.getFullYear() % 100;
    if (this.yy < 10) {
      this.yy = `0${this.yy}`;
    }

    return `${this.dayText} ${this.dd}.${this.mm}.${this.yy}`;
  }
}


export default WeatherModel;

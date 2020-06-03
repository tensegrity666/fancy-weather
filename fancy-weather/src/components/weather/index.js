/* eslint-disable class-methods-use-this */

import WeatherModel from './weather.model';

import styles from './styles/weather.module.scss';
import icons from './styles/icons.module.scss';

import { DAYS } from '../../constants';


class WeatherView {
  constructor(city, forecast) {
    this.model = new WeatherModel(city, forecast);

    this.timer = setInterval(this.clock, 1000);
  }

  clock() {
    this.date = new Date();
    this.day = this.date.getDay();
    this.dayText = DAYS[this.day];

    this.dd = this.date.getDate();
    if (this.dd < 10) {
      this.dd = `0${this.dd}`;
    }

    this.mm = this.date.getMonth() + 1;
    if (this.mm < 10) {
      this.mm = `0${this.mm}`;
    }

    this.yy = this.date.getFullYear() % 100;
    if (this.yy < 10) {
      this.yy = `0${this.yy}`;
    }

    this.hh = this.date.getHours();
    if (this.hh < 10) {
      this.hh = `0${this.hh}`;
    }

    this.min = this.date.getMinutes();
    if (this.min < 10) {
      this.min = `0${this.min}`;
    }

    this.sec = this.date.getSeconds();
    if (this.sec < 10) {
      this.sec = `0${this.sec}`;
    }

    document.querySelector('#clock').innerText = `${this.dayText} ${this.dd}.${this.mm}.${this.yy} ${this.hh}:${this.min}:${this.sec}`;
  }

  render() {
    return `
      <section class=${styles.weather}>
        <h3 class=${styles.weatherTitle}>${this.model.city}, ${this.model.country}</h3>
        <time class=${styles.weatherDate} datetime=${this.date} id='clock'></time>
        <ol class=${styles.weatherWeek}>
          <li class=${styles.weatherTodayTemperature}>${this.model.temperature || '--'}&#176;
            <div class='${icons.icon} ${icons.iconToday}' style='background-image: url(./assets/weatherIcons/${this.model.iconCodeToday}.svg)'></div>
          </li>
          <li class=${styles.weatherToday}>
            <ul>
              <li>${this.model.descriptionToday}</li>
              <li>ощущается как: ${this.model.feels || '--'}</li>
              <li>ветер: ${this.model.wind || '--'}m/s</li>
              <li>влажность: ${this.model.humidity || '--'}%</li>
            </ul>
          </li>
          <li class=${styles.weatherWeekSecond}>${this.model.temperatureSecond || '--'}&#176;
            <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.model.iconCodeSecondDay}.svg)'></div>
          </li>
          <li class=${styles.weatherWeekThird}>${this.model.temperatureThird || '--'}&#176;
            <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.model.iconCodeThirdDay}.svg)'></div>
          </li>
          <li class=${styles.weatherWeekFourd}>${this.model.temperatureFourd || '--'}&#176;
            <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.model.iconCodeFourdDay}.svg)'></div>
          </li>
        </ol>
      </section>`;
  }

  deleteTimer() {
    clearInterval(this.timer);
  }
}


export default WeatherView;

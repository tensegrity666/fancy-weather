/* eslint-disable class-methods-use-this */

import styles from './styles/weather.module.scss';
import icons from './styles/icons.module.scss';

import WeatherModel from './weather.model';


class WeatherView {
  constructor(city, forecast) {
    this.model = new WeatherModel(city, forecast);

    this.timer = setInterval(this.clock, 1000);
  }

  clock() {
    this.date = new Date();

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

    document.querySelector('#clock').innerText = `${this.hh}:${this.min}:${this.sec}`;
  }

  render() {
    return `
      <section class=${styles.weather}>
        <h3 class=${styles.weatherTitle}>${this.model.city}, ${this.model.country}</h3>
        <time class=${styles.weatherDate} datetime=${this.model.beautyDate}>${this.model.beautyDate}</time><span id='clock'></span>
        <ol class=${styles.weatherWeek}>
          <li class=${styles.weatherTodayTemperature}>${this.model.temperature || '--'}&#176;
            <div class='${icons.icon} ${icons.iconToday}' style='background-image: url(./assets/weatherIcons/${this.model.iconCodeToday}.svg)'></div>
          </li>
          <li class=${styles.weatherToday}>
            <ul>
              <li>${this.model.descriptionToday}</li>
              <li>feels like: ${this.model.feels || '--'}</li>
              <li>wind: ${this.model.wind || '--'}m/s</li>
              <li>pressure: ${this.model.pressure || '--'}hPa</li>
              <li>humidity: ${this.model.humidity || '--'}%</li>
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

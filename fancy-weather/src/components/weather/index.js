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

    let mm = this.date.getMonth() + 1;
    if (mm < 10) {
      mm = `0${mm}`;
    }

    let yy = this.date.getFullYear() % 100;
    if (yy < 10) {
      yy = `0${yy}`;
    }

    let hh = this.date.getHours();
    if (hh < 10) {
      hh = `0${hh}`;
    }

    let min = this.date.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }

    let sec = this.date.getSeconds();
    if (sec < 10) {
      sec = `0${sec}`;
    }

    return `${this.dayText} ${this.dd}.${mm}.${yy} ${hh}:${min}:${sec}`;
  }

  render() {
    const date = new Date();
    const currentDayNumber = date.getDay();

    const nextDay = (day, offset) => {
      let dayNumber = day + offset;
      if (dayNumber >= DAYS.length) {
        dayNumber = offset - 1;
      }

      return dayNumber;
    };

    const day2Name = DAYS[nextDay(currentDayNumber, 1)];
    const day3Name = DAYS[nextDay(currentDayNumber, 2)];
    const day4Name = DAYS[nextDay(currentDayNumber, 3)];

    console.log(nextDay(2));

    return `
      <section class=${styles.weather}>
        <h3 class=${styles.weatherTitle}>${this.model.city}, ${this.model.country}</h3>
        <time class=${styles.weatherDate} datetime=${this.date} id='clock'>${this.timer}</time>
        <ol class=${styles.weatherWeek}>
          <li class=${styles.weatherTodayTemperature} data-temperature>
          ${this.model.temperature || '--'}
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
          <li class=${styles.weatherWeekSecond} data-temperature>
          ${this.model.temperatureSecond || '--'}
            <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.model.iconCodeSecondDay}.svg)'>
            
              <span class=${styles.nextDay}>${day2Name}</span>
            
            </div>
          </li>
          <li class=${styles.weatherWeekThird} data-temperature>
          ${this.model.temperatureThird || '--'}
            <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.model.iconCodeThirdDay}.svg)'>
            
              <span class=${styles.nextDay}>${day3Name}</span>

            </div>
          </li>
          <li class=${styles.weatherWeekFourd} data-temperature>
          ${this.model.temperatureFourd || '--'}
            <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.model.iconCodeFourdDay}.svg)'>

              <span class=${styles.nextDay}>${day4Name}</span>
            
            </div>
          </li>
        </ol>
      </section>`;
  }

  deleteTimer() {
    clearInterval(this.timer);
  }
}


export default WeatherView;

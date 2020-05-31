/* eslint-disable class-methods-use-this */

import styles from './styles/weather.module.scss';
import icons from './styles/icons.module.scss';


class WeatherView {
  constructor(model) {
    this.container = document.querySelector('.container');

    this.city = model.city;
    this.country = model.country;
    this.temperature = model.temperature;
    this.icon = model.icon;
    this.date = model.UTCstring;
    this.feels = model.feels;
    this.humidity = model.humidity;
    this.pressure = model.pressure;
    this.description = model.description;

    this.addWeather();
  }


  addWeather() {
    if (this.weather) {
      return this.weather;
    }
    this.weather = document.createElement('section');
    this.weather.classList.add('container__block', 'container__block_large', `${styles.weather}`);
    this.weather.innerHTML = this.render();

    return this.container.append(this.weather);
  }

  render() {
    return `
      <h3 class=${styles.weatherTitle}>${this.city}, ${this.country}</h3>
      <time class=${styles.weatherDate} datetime=${this.date}>${this.date}</time>
      <ol class=${styles.weatherWeek}>
        <li class=${styles.weatherTodayTemperature}>${this.temperature}&#176;
          <div class='${icons.icon} ${icons.iconToday}' style='background-image: url(./assets/weatherIcons/${this.icon}.svg)'></div>
        </li>
        <li class=${styles.weatherToday}>
          <ul>
            <li>${this.description}</li>
            <li>pressure: ${this.pressure}</li>
            <li>feels like: ${this.feels}</li>
            <li>humidity: ${this.humidity}</li>
          </ul>
        </li>
        <li class=${styles.weatherWeekSecond}>12 &#176;
          <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.icon}.svg)'></div>
        </li>
        <li class=${styles.weatherWeekThird}>14 &#176;
          <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.icon}.svg)'></div>
        </li>
        <li class=${styles.weatherWeekFourd}>19 &#176;
          <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.icon}.svg)'></div>
        </li>
      </ol>`;
  }
}


export default WeatherView;

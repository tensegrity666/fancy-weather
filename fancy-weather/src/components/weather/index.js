/* eslint-disable class-methods-use-this */

import styles from './styles/weather.module.scss';
import icons from './styles/icons.module.scss';

import WeatherModel from './weather.model';


class WeatherView {
  constructor(city, overcast) {
    this.model = new WeatherModel(city, overcast);

    // this.city = model.city;
    // this.country = model.country;
    // this.temperature = model.temperature;
    // this.icon = model.icon;
    // this.date = model.UTCstring;
    // this.feels = model.feels;
    // this.humidity = model.humidity;
    // this.pressure = model.pressure;
    // this.description = model.description;
    // this.render();
  }

  render() {
    return `
      <section class=${styles.weather}>
        <h3 class=${styles.weatherTitle}>${this.model.city}, ${this.model.country}</h3>
        <time class=${styles.weatherDate} datetime=${this.date}>${this.model.date}</time>
        <ol class=${styles.weatherWeek}>
          <li class=${styles.weatherTodayTemperature}>${this.temperature}&#176;
            <div class='${icons.icon} ${icons.iconToday}' style='background-image: url(./assets/weatherIcons/${this.model.icon}.svg)'></div>
          </li>
          <li class=${styles.weatherToday}>
            <ul>
              <li>${this.model.description}</li>
              <li>pressure: ${this.model.pressure}</li>
              <li>feels like: ${this.model.feels}</li>
              <li>humidity: ${this.model.humidity}</li>
            </ul>
          </li>
          <li class=${styles.weatherWeekSecond}>12 &#176;
            <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.model.icon}.svg)'></div>
          </li>
          <li class=${styles.weatherWeekThird}>14 &#176;
            <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.model.icon}.svg)'></div>
          </li>
          <li class=${styles.weatherWeekFourd}>19 &#176;
            <div class='${icons.icon} ${icons.iconSmall}' style='background-image: url(./assets/weatherIcons/${this.model.icon}.svg)'></div>
          </li>
        </ol>
      </section>`;
  }
}


export default WeatherView;

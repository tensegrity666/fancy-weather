/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */

import './styles/geo.scss';


class GeoView {
  constructor(coordinates) {
    this.container = document.querySelector('.container');
    this.latitude = coordinates[0];
    this.longitude = coordinates[1];

    this.addMap();
  }

  addMap() {
    if (this.map) {
      return this.map;
    }
    this.map = document.createElement('section');
    this.map.classList.add('container__block', 'geo');
    this.map.innerHTML = this.render();

    return this.container.append(this.map);
  }

  render() {
    return `
      <h3 class="visually-hidden">map</h3>
      <div class="map" id="map"></div>
      <ul class="coordinates">
        <li class="coordinates_item">latitude: ${this.latitude}</li>
        <li class="coordinates_item">longitude: ${this.longitude}</li>
      </ul>`;
  }
}


export default GeoView;

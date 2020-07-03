/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-destructuring */

import './styles/geo.scss';


class GeoView {
  constructor(coordinates) {
    this.latitude = coordinates[0];
    this.longitude = coordinates[1];
  }

  render() {
    return `
      <section class='container__block geo'>
        <h3 class='visually-hidden'>map</h3>
        <div class='map' id='map'></div>
        <ul class='coordinates'>
          <li class='coordinates_item'>широта: ${this.latitude}</li>
          <li class='coordinates_item'>долгота: ${this.longitude}</li>
        </ul>
      </section>`;
  }
}


export default GeoView;

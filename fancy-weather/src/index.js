/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import './index.scss';

import Presenter from './presenter';

import IPinfo from './utils/IPinfo';
import { renderMap } from './utils/MapBox';

import TOKENS from '../tokens';
import { IPinfoLink } from './constants';


async function getUserLocation() {
  const { loc, city } = await IPinfo(IPinfoLink, TOKENS.IPinfo);

  return { loc, city };
}


getUserLocation()
  .then((data) => {
    const userCity = data.city;
    const coordinates = data.loc.split(',');

    const presenter = new Presenter(coordinates, userCity);

    renderMap(TOKENS.mapBox, coordinates);
  });

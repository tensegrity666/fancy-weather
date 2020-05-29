import './index.scss';

import IPinfo from './utils/IPinfo';
import renderMap from './utils/MapBox';

import TOKENS from '../tokens';
import { IPinfoLink } from './constants';

async function getUserData() {
  const { city, country, timezone, loc } = await IPinfo(IPinfoLink, TOKENS.IPinfo);

  console.log(city, country, timezone, loc);
}

const coordinates = [30.3141, 59.9386];

getUserData();
renderMap(TOKENS.mapBox, coordinates);

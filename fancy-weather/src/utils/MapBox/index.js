/* eslint-disable no-unused-vars */

import mapboxgl from 'mapbox-gl';

function renderMap(token, coordinates) {
  mapboxgl.accessToken = token;

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coordinates,
    zoom: 10,
  });

  const marker = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
}

export default renderMap;

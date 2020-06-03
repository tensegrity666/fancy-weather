/* eslint-disable no-unused-vars */

import mapboxgl from 'mapbox-gl';

function renderMap(token, coordinates) {
  mapboxgl.accessToken = token;
  const [longitude, latitude] = coordinates;

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [latitude, longitude],
    zoom: 10,
  });

  const marker = new mapboxgl.Marker()
    .setLngLat([latitude, longitude])
    .addTo(map);
}


function searchCity(token, city) {
  mapboxgl.accessToken = token;

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: city,
    zoom: 10,
  });

  const marker = new mapboxgl.Marker()
    .setLngLat(city)
    .addTo(map);
}

export { renderMap, searchCity };

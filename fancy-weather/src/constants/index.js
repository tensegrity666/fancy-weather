const IPinfoLink = 'https://ipinfo.io/json?token=';

const unsplashParams = {
  link: 'https://api.unsplash.com/search/photos?client_id=',
  param1: 'per_page=1',
  param2: 'orientation=landscape',
  param3: 'content_filter=high',
  queryPostfix: 'query=',
};

const openWeatherParams = {
  link: 'https://api.openweathermap.org/data/2.5/forecast?appid=',
  langFi: 'lang=fi',
  langRu: 'lang=ru',
  limits: 'cnt=1',
  unitsCels: 'units=metric',
  unitsFar: 'units=imperial',
  queryPostfix: 'q=',
};

export { IPinfoLink, unsplashParams, openWeatherParams };

const IPinfoLink = 'https://ipinfo.io/json?token=';

const DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

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
  langEn: 'lang=en',
  langRu: 'lang=ru',
  days: 'cnt=32',
  unitsCels: 'units=metric',
  unitsFar: 'units=imperial',
  queryPostfix: 'q=',
};

const createRequestLink = (link, token, param1 = null, param2 = null, param3 = null, query) => `${link}${token}&${param1}&${param2}&${param3}&${query}`;

const elementID = {
  left: 'leftBlock',
  right: 'rightBlock',
};

export {
  IPinfoLink, unsplashParams, openWeatherParams, createRequestLink, elementID, DAYS, DAYS_EN,
};

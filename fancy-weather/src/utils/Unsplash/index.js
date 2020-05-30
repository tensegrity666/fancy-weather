import { createRequestLink, getRandomInt } from '../../helpers';
import { unsplashParams } from '../../constants';
import TOKENS from '../../../tokens';

const {
  link, param1, param2, param3, queryPostfix,
} = unsplashParams;


const requestLink = createRequestLink(link, TOKENS.unsplash, param1, param2, param3, queryPostfix);

const randomPage = getRandomInt(1, 100);

async function getUnsplashImage(request) {
  const fullRequest = `${requestLink}${request}&page=${randomPage}`;

  const response = await fetch(fullRequest);
  return response.json();
}


export default getUnsplashImage;

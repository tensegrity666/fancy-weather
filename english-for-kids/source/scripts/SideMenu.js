import { SOUND_EFFECTS, soundEffect } from './utils/SoundeffectsHandler';

const menu = document.querySelector('.menu');
const button = document.querySelector('.burger');
const burgerInner = button.querySelector('.burger__inner');
const page = document.querySelector('.page');

export default function sideMenuToggle() {
  button.addEventListener('click', () => {
    SOUND_EFFECTS.isSoundPlay = true;
    soundEffect(SOUND_EFFECTS.menuButton, SOUND_EFFECTS.delayForMenu);
    page.classList.toggle('page-noscroll');
    menu.classList.toggle('menu_show');
    burgerInner.classList.toggle('burger-action');
    SOUND_EFFECTS.isSoundPlay = false;
  });

  clearTimeout(soundEffect);
}
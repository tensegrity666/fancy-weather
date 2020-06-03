/* eslint-disable class-methods-use-this */

import './styles/index.scss';

class AppView {
  constructor() {
    this.languageSelect = document.querySelector('#lang');
    this.currentLanguage = this.languageSelect.value;

    this.refreshBackgroundBtn = document.querySelector('#refresh');

    this.unitSelectFahr = document.querySelector('#farenheit');
    this.unitSelectCels = document.querySelector('#celsius');
  }
}

export default AppView;

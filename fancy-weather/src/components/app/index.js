import './styles/index.scss';

class AppView {
  constructor(model) {
    this.currentLanguage = this.languageSelect.value;
    this.lang = model.currentLanguage;

    this.languageSelect = document.querySelector('#lang');

    this.refreshBackgroundBtn = document.querySelector('#refresh');

    this.unitSelectFahr = document.querySelector('#farenheit');
    this.unitSelectCels = document.querySelector('#celsius');
  }
}

export default AppView;

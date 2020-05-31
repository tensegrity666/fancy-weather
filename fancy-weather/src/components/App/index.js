import './styles/index.scss';

class AppView {
  constructor(model) {
    this.lang = model.currentLanguage;

    this.refreshBackgroundBtn = document.querySelector('#refresh');

    this.unitSelectFahr = document.querySelector('#farenheit');
    this.unitSelectCels = document.querySelector('#celsius');
  }
}

export default AppView;

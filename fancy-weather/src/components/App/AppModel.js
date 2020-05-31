class AppModel {
  constructor() {
    this.languageSelect = document.querySelector('#lang');
    this.currentLanguage = this.languageSelect.value;
  }
}

export default AppModel;

import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor({ handleFormSubmit }, popupSelector) {
      super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        })
        return inputValues
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit( this._getInputValues() )});
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
    
  }
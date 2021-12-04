import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor({ formSubmit }, popupSelector) {
      super(popupSelector);
        this._formSubmit = formSubmit;
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        })
        return inputValues
    }

    setEventListeners() {
        this._popup.addEventListener('click', (event) => {
            if (event.target.classList.contains('popup_opened')) {
                this.close();
            }
            if (event.target.classList.contains('popup__close')) {
                this.close();
            }
        });
   
        this._popup.addEventListener('submit', this._formSubmit.bind(this));
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
        this._popup.querySelector('.popup__form').reset();
    }
    
  }
import Popup from './Popup.js'

export default class PopupChangeAvatar extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
      super(popupSelector);
        this._input = this._popup.querySelector('.popup__input');
        this._popupForm = this._popup.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
    }

    getInputValue() {
        return this._input.value;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit()
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
    
  }
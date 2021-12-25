import Popup from './Popup.js'

export default class PopupDeleteConfirm extends Popup {
    constructor({ removeCard }, popupSelector) {
        super(popupSelector);
        this._removeCard = removeCard;
        this._popupDeleteButton = this._popup.querySelector('.popup__button');
    }

    setSubmitAction(action) {
        this._removeCard = action;
      }
    
    setEventListeners() {
        super.setEventListeners();
        this._popupDeleteButton.addEventListener('click', () => {this._removeCard()});
    }
    
  }
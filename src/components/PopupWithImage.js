import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._popupPicture = this._popup.querySelector('.popup__picture');
      this._popupPictureCaption = this._popup.querySelector('.popup__caption');
    }

    open(name, link) {
        this._popupPicture.src = link;
        this._popupPicture.alt = name;
        this._popupPictureCaption.textContent = name;
        super.open();
    }
    
  }
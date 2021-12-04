import Popup from './Popup.js'
import {
    popupPicture,
    popupPictureCaption
} from '../utils/constants.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
    }

    open(name, link) {
        popupPicture.src = link;
        popupPicture.alt = name;
        popupPictureCaption.textContent = name;
        super.open();
    }
    
  }
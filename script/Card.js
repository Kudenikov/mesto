import {openPopup} from './index.js'
const popupZoomPicture = document.querySelector('.popup_zoom-picture');
const popupPicture = popupZoomPicture.querySelector('.popup__picture');
const popupPictureCaption = popupZoomPicture.querySelector('.popup__caption');

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.cards__heart-pic');
    this._removeButton = this._element.querySelector('.cards__trash');
    this._cardPicture = this._element.querySelector('.cards__image');
    this._element.querySelector('.cards__place').innerText = this._name;
    this._cardPicture.src = this._link;
    this._cardPicture.alt = this._name;
    this._setEventListeners();

    return this._element;
  }

  _handleLikeButton(event) {
    event.target.classList.toggle('cards__heart-pic_like')
  }

  _handleRemoveButton(event) {
    event.target.closest('.cards__item').remove();
  }

  _handleZoomPicture() {
    popupPicture.src = this._link;
    popupPicture.alt = this._name;
    popupPictureCaption.textContent = this._name;
    openPopup(popupZoomPicture);
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', (event) => this._handleLikeButton(event));
    this._removeButton.addEventListener('click', (event) => this._handleRemoveButton(event));
    this._cardPicture.addEventListener('click', () => this._handleZoomPicture());
  }
}

export default Card;

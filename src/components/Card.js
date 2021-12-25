class Card {
  constructor(data, cardSelector, handleCardClick, { handleRemoveButton, handleLikeButton }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveButton = handleRemoveButton;
    this._handleLikeButton = handleLikeButton
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
    this._likeCounter = this._element.querySelector('.cards__like-counter');
    this._element.querySelector('.cards__place').innerText = this._name;
    this._cardPicture.src = this._link;
    this._cardPicture.alt = this._name;
    this._likeCounter.textContent = this._likes.length;
    this._setEventListeners();
    return this._element;
  }

  setHeartColor(id) {
    if (this._likes.some(like => like['_id'] === id)) {
      this._likeButton.classList.add('cards__heart-pic_like');
    }
  }

  removeTrash(userId, myId) {
    if (userId !== myId) {
      this._removeButton.remove();
    }
  }

  setLike(data) {
    this._likeButton.classList.add('cards__heart-pic_like');
    this._likeCounter.textContent = data;
  }

  removeLike(data) {
    this._likeButton.classList.remove('cards__heart-pic_like');
    this._likeCounter.textContent = data;
  }

  deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeButton());
    this._removeButton.addEventListener('click', () => this._handleRemoveButton(this));
    this._cardPicture.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
}

export default Card;

const popupProfileEdit = document.querySelector('.popup_profile-edit');
const popupAddCard = document.querySelector('.popup_add-card');
const popupZoomPicture = document.querySelector('.popup_zoom-picture');
const popupEditCloseButton = popupProfileEdit.querySelector('.popup__close');
const popupAddCloseButton = popupAddCard.querySelector('.popup__close');
const popupZoomCloseButton = popupZoomPicture.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const formProfileEdit = popupProfileEdit.querySelector('.popup__form_function_profile-edit');
const formAddCard = popupAddCard.querySelector('.popup__form_function_add-card');

const nameField = popupProfileEdit.querySelector('input[name="profile-name"]');
const professionField = popupProfileEdit.querySelector('input[name="profile-profession"]');
const placeNameField = popupAddCard.querySelector('input[name="place-name"]');
const imageLinkField = popupAddCard.querySelector('input[name="image-link"]');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession')

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

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
    const popupPicture = popupZoomPicture.querySelector('.popup__picture');
    popupPicture.src = this._link;
    popupPicture.alt = this._name;
    popupZoomPicture.querySelector('.popup__caption').textContent = this._name;
    openPopup(popupZoomPicture);
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', (event) => this._handleLikeButton(event));
    this._removeButton.addEventListener('click', (event) => this._handleRemoveButton(event));
    this._cardPicture.addEventListener('click', () => this._handleZoomPicture());
  }
}

const cards = document.querySelector('.cards');

initialCards.forEach(prependCard);

function prependCard(item) {
    const card = new Card(item, '.template');
    const cardElement = card.createCard();
    cards.prepend(cardElement);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  //функция закрытия попапа по нажатию клавиши Esc и снятие слушателя после закрытия
  const escapeHandler = (event) => {
    if (event.key === 'Escape') {
      closePopup(popup);
      document.removeEventListener('keydown', escapeHandler);
      }
    }
  //включения слушателя клавиши Esc для закрытия попапа
  document.addEventListener('keydown', escapeHandler);
}

function openPopupProfileEdit() {
  openPopup(popupProfileEdit);
  nameField.value = profileName.textContent;
  professionField.value = profileProfession.textContent;
}

//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  //проверка содержится ли внитри попапа форма
  if (popup.querySelector('.popup__form')) {
    const formElement = popup.querySelector('.popup__form');
    const inputElement = formElement.querySelector('.popup__input');
    hideInputError(formElement, inputElement, validationConfig);
    formElement.reset();
  }
}

function submitProfileEditForm(event) {
  event.preventDefault();
  profileName.textContent = nameField.value;
  profileProfession.textContent = professionField.value;
  closePopup(popupProfileEdit);
}

function submitAddCardForm(event) {
  event.preventDefault();
  const newCard = {
    name: placeNameField.value,
    link: imageLinkField.value
  }
  prependCard(newCard);
  //обнуление полей формы после отправки
  event.target.reset();
  closePopup(popupAddCard);
}

const popupArray = Array.from(document.querySelectorAll('.popup'))
popupArray.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
    closePopup(item);
    }
  })

})

addButton.addEventListener('click', () => openPopup(popupAddCard));
editButton.addEventListener('click', openPopupProfileEdit);
popupEditCloseButton.addEventListener('click', () => closePopup(popupProfileEdit));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAddCard));
popupZoomCloseButton.addEventListener('click', () => closePopup(popupZoomPicture));
formProfileEdit.addEventListener('submit', submitProfileEditForm);
formAddCard.addEventListener('submit', submitAddCardForm);

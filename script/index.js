const popupProfileEdit = document.querySelector('.popup_profile-edit');
const popupAddCard = document.querySelector('.popup_add-card');
export const popupZoomPicture = document.querySelector('.popup_zoom-picture');
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

import Card from './card.js';

const cards = document.querySelector('.cards');

initialCards.forEach(prependCard);

function prependCard(item) {
  const card = new Card(item, '.template');
  const cardElement = card.createCard();
  cards.prepend(cardElement);
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  //функция закрытия попапа по нажатию клавиши Esc и снятие слушателя после закрытия
  const escapeHandler = (event) => {
    if (event.key === 'Escape') {
      closePopup(popup);
      document.removeEventListener('keydown', escapeHandler);
      }
    }
  //включение слушателя клавиши Esc для закрытия попапа
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
    const inputElements = formElement.querySelectorAll('.popup__input');
    inputElements.forEach(item => hideError(formElement, item, validationConfig))
    formElement.reset();
  }
}

function hideError(form, inputElement, config) {
  const formError = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorUnderlineClass);
  formError.classList.remove(config.inputErrorTextClass);
  formError.textContent = '';
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

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorUnderlineClass: 'popup__input_type_error',
  inputErrorTextClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__button',
  submitButtonErrorClass: 'popup__button_inactive'
}

import FormValidator from './FormValidator.js';

const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
formList.forEach(item => {
  const formValid = new FormValidator(validationConfig, item);
  formValid.enableValidation()
});

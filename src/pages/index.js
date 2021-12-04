import './index.css'
//ИМПОРТ КОНСТАНТ
import {
  editButton,
  addButton,
  formProfileEdit,
  formAddCard,
  initialCards,
  validationConfig,
  nameField,
  professionField,
} from '../utils/constants.js';

//ИМПОРТ КЛАССОВ
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';

//СОЗДАНИЕ ЭКЗЕМПЛЯРОВ КЛАССОВ
const cardList = new Section({ 
  items: initialCards,
  renderer: (item) => {
      const card = new Card(item, '.template', handleCardClick);
      const cardElement = card.createCard();
      cardList.addItem(cardElement)
  }
 }, '.cards');

function handleCardClick(name, link) {
  const popupImg = new PopupWithImage('.popup_zoom-picture');
  popupImg.open(name, link);
  popupImg.setEventListeners();
}

const user = new UserInfo({
  profileName: '.profile__name',
  profileProfession: '.profile__profession'
});

const popupProfileEdit = new PopupWithForm({
  formSubmit: (event) => {
    event.preventDefault();
    const profileData = popupProfileEdit._getInputValues();
    user.setUserInfo(profileData);
    popupProfileEdit.close()
  }

}, '.popup_profile-edit');

const popupAddCard = new PopupWithForm({
  formSubmit: (event) => {
    event.preventDefault();
    const pictureData = popupAddCard._getInputValues();
    const newCard = {
      name: pictureData["place-name"],
      link: pictureData["image-link"]
    }
    const card = new Card(newCard, '.template');
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
    popupAddCard.close();
  }

}, '.popup_add-card');

const formProfileEditValidation = new FormValidator(validationConfig, formProfileEdit);
const formAddCardValidation = new FormValidator(validationConfig, formAddCard);

//ОТРИСОВКА КАРТОЧЕК НА СТРАНИЦЕ
cardList.renderItems();

//ВКЛЮЧЕНИЕ СЛУШАТЕЛЕЙ СОБЫТИЙ
popupProfileEdit.setEventListeners();
popupAddCard.setEventListeners();

addButton.addEventListener('click', () => {
  formAddCardValidation.resetValidation();
  popupAddCard.open();
});

editButton.addEventListener('click', () => {
  formProfileEditValidation.resetValidation();
  popupProfileEdit.open();
  const userData = user.getUserInfo();
  nameField.value = userData.userName;
  professionField.value = userData.userProfession;
});

//ВКЛЮЧЕНИЕ ВАЛИДАЦИИ
formProfileEditValidation.enableValidation();
formAddCardValidation.enableValidation();
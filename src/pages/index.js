import './index.css'
//ИМПОРТ КОНСТАНТ
import {
  editButton,
  addButton,
  formProfileEdit,
  formAddCard,
  formChangeAvatar,
  validationConfig,
  nameField,
  professionField,
  profileName,
  profileProfession,
  profileAvatar,
  profileAvatarContainer
} from '../utils/constants.js';

//ИМПОРТ КЛАССОВ
import Section from '../components/Section.js';
import PopupDeleteConfirm from '../components/PopupDeleteConfirm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  address: 'https://nomoreparties.co/v1/cohort-32',
  token: '177d42c6-9819-4203-8638-327e1c972af4'
});

let myId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    profileName.textContent = userData.name;
    profileProfession.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    myId = userData._id;

    const cardList = new Section({
      items: cards,
      renderer: (item) => {
        cardList.addItem(createNewCard(item))
      }
    }, '.cards')
    cardList.renderItems();

    const popupAddCard = new PopupWithForm({
      handleFormSubmit: (data) => {
        popupAddCard.renderLoading(true);
        const newCard = {
          name: data["place-name"],
          link: data["image-link"]
        }
        api.addNewCard(newCard)
        .then(data => {
          cardList.addItem(createNewCard(data));
          popupAddCard.close();
        })
        .catch(error => {
          console.log('ОШИБКА:', error)
        })
        .finally(popupAddCard.renderLoading(true));
      }
    
    }, '.popup_add-card');

    popupAddCard.setEventListeners();

    addButton.addEventListener('click', () => {
      formAddCardValidation.resetValidation();
      popupAddCard.open();
    });
  })
  .catch(error => {
    console.log('ОШИБКА:', error)
  });

function createNewCard(item) {
  const card = new Card(item, '.template', handleCardClick, {
    handleRemoveButton: (card) => {
      popupDeleteCard.open();
      popupDeleteCard.setSubmitAction(() => {
        api.deleteCard(item._id)
        .then(card.deleteCard())
        .catch(error => {
          console.log('ОШИБКА:', error)
        });
        popupDeleteCard.close(); 
    })},

    handleLikeButton: () => {
        if (item.likes.some(like => like['_id'] === myId)) {
          api.removeLike(item._id)
          .then ((data) => { 
            item = data;
            card.removeLike(item.likes.length);
          })
          .catch(error => {
            console.log('ОШИБКА:', error)
          });
        } else {
          api.setLike(item._id)
          .then ((data) => {
            item = data;
            card.setLike(item.likes.length);
          })
          .catch(error => {
            console.log('ОШИБКА:', error)
          });
        }
    }});
    
  const cardElement = card.createCard();
  card.removeTrash(item.owner._id, myId);
  card.setHeartColor(myId);
  return cardElement;
}

const popupDeleteCard = new PopupDeleteConfirm({
  removeCard: () => {}
}, '.popup_delete-card');
popupDeleteCard.setEventListeners();

const popupImg = new PopupWithImage('.popup_zoom-picture');

function handleCardClick(name, link) {
  popupImg.open(name, link);
}

const user = new UserInfo({
  profileName: '.profile__name',
  profileProfession: '.profile__profession',
  profileAvatar: '.profile__avatar'
});

const popupProfileEdit = new PopupWithForm({
  handleFormSubmit: (data) => {
    popupProfileEdit.renderLoading(true);
    api.updateUserInfo(data)
    .then((data) => {
      console.log(data);
      user.setUserInfo(data)
    })
    .catch(error => {
      console.log('ОШИБКА:', error)
    })
    .finally(popupProfileEdit.renderLoading(false));
    popupProfileEdit.close()
  }

}, '.popup_profile-edit');

const formProfileEditValidation = new FormValidator(validationConfig, formProfileEdit);
const formAddCardValidation = new FormValidator(validationConfig, formAddCard);
const formChangeAvatarValidation = new FormValidator(validationConfig, formChangeAvatar);


//ВКЛЮЧЕНИЕ СЛУШАТЕЛЕЙ СОБЫТИЙ
popupProfileEdit.setEventListeners();
popupImg.setEventListeners();

editButton.addEventListener('click', () => {
  formProfileEditValidation.resetValidation();
  popupProfileEdit.open();
  const userData = user.getUserInfo();
  nameField.value = userData.userName;
  professionField.value = userData.userProfession;
});

profileAvatarContainer.addEventListener('click', () => {
  popupChangeAvatar.open();
});

const popupChangeAvatar = new PopupWithForm({
  handleFormSubmit: (data) => {
    popupChangeAvatar.renderLoading(true);
    user.setAvatar(data);
    api.updateAvatar(data['avatar'])
    .then(data => console.log(data))
    .catch(error => {
      console.log('ОШИБКА:', error)
    })
    .finally(popupChangeAvatar.renderLoading(false));
    popupChangeAvatar.close();
  }
}, '.popup_change-avatar');
popupChangeAvatar.setEventListeners();

//ВКЛЮЧЕНИЕ ВАЛИДАЦИИ
formProfileEditValidation.enableValidation();
formAddCardValidation.enableValidation();
formChangeAvatarValidation.enableValidation();

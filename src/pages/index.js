import './index.css'
//ИМПОРТ КОНСТАНТ
import {
  editButton,
  addButton,
  formProfileEdit,
  formAddCard,
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
import PopupChangeAvatar from '../components/PopupChangeAvatar.js';
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

api.getUserInfo()
  .then((data) => {
    profileName.textContent = data.name;
    profileProfession.textContent = data.about;
    profileAvatar.src = data.avatar;
    myId = data._id;
  })
  .catch(error => {
    console.log('ОШИБКА:', error)
  });

api.getInitialCards()
  .then((data) => {
    const cardList = new Section({
      items: data,
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
        api.deleteCard(item._id);
        card.deleteCard();
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
  profileProfession: '.profile__profession'
});

const popupProfileEdit = new PopupWithForm({
  handleFormSubmit: (data) => {
    popupProfileEdit.renderLoading(true);
    user.setUserInfo(data);
    api.updateUserInfo(data)
    .then(data => console.log(data))
    .catch(error => {
      console.log('ОШИБКА:', error)
    })
    .finally(popupProfileEdit.renderLoading(false));
    popupProfileEdit.close()
  }

}, '.popup_profile-edit');

const formProfileEditValidation = new FormValidator(validationConfig, formProfileEdit);
const formAddCardValidation = new FormValidator(validationConfig, formAddCard);


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
  popupChangeAva.open();
});

const popupChangeAva = new PopupChangeAvatar('.popup_change-avatar', {
  handleFormSubmit: () => {
    popupChangeAva.renderLoading(true);
    profileAvatar.src = popupChangeAva.getInputValue();
    api.updateAvatar(popupChangeAva.getInputValue())
    .then(data => console.log(data))
    .catch(error => {
      console.log('ОШИБКА:', error)
    })
    .finally(popupChangeAva.renderLoading(false));
    popupChangeAva.close();
  }
});
popupChangeAva.setEventListeners();

//ВКЛЮЧЕНИЕ ВАЛИДАЦИИ
formProfileEditValidation.enableValidation();
formAddCardValidation.enableValidation();

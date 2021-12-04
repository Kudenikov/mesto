export const popupZoomPicture = document.querySelector('.popup_zoom-picture');
export const popupPicture = popupZoomPicture.querySelector('.popup__picture');
export const popupPictureCaption = popupZoomPicture.querySelector('.popup__caption');
export const popupProfEdit = document.querySelector('.popup_profile-edit');
export const popupAddCard = document.querySelector('.popup_add-card');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const formProfileEdit = document.querySelector('.popup_profile-edit').querySelector('.popup__form_function_profile-edit');
export const formAddCard = popupAddCard.querySelector('.popup__form_function_add-card');
export const nameField = popupProfEdit.querySelector('input[name="profile-name"]');
export const professionField = popupProfEdit.querySelector('input[name="profile-profession"]');
export const placeNameField = popupAddCard.querySelector('input[name="place-name"]');
export const imageLinkField = popupAddCard.querySelector('input[name="image-link"]');
import rzhev from '../images/rzhev.jpg';
import kazan from '../images/kazan.jpg';
import mebius from '../images/mebius.jpg';
import arctic from '../images/arctic lng-2.jpg';
import lion from '../images/lion.jpg';
import aquapark from '../images/aquapark.jpg';


export const initialCards = [
    {
      name: 'Ржевский мемориал',
      link: rzhev
    },
    {
      name: 'Казань Арена',
      link: kazan
    },
    {
      name: 'Арктик СПГ-2',
      link: arctic
    },
    {
      name: 'Опора ЛЭП',
      link: lion
    },
    {
      name: 'Аквапарк Белгород',
      link: aquapark
    },
    {
      name: 'Лента Мебиуса',
      link: mebius
    }
  ];
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorUnderlineClass: 'popup__input_type_error',
    inputErrorTextClass: 'popup__input-error_active',
    submitButtonSelector: '.popup__button',
    submitButtonErrorClass: 'popup__button_inactive'
  };
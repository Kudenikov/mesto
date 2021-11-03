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

const cards = document.querySelector('.cards');
const templateItem = document.querySelector('.template').content;

initialCards.forEach(prependCard);

function prependCard(item) {
    const card = createCard(item);
    cards.prepend(card);
}

function createCard(item) {
    const card = templateItem.querySelector('.cards__item').cloneNode(true);
    const likeButton = card.querySelector('.cards__heart-pic');
    const removeButton = card.querySelector('.cards__trash');
    const cardPicture = card.querySelector('.cards__image');
    card.querySelector('.cards__place').innerText = item.name;
    cardPicture.src = item.link;
    cardPicture.alt = item.name;
    likeButton.addEventListener('click', (event) => {
      event.target.classList.toggle('cards__heart-pic_like');
    });
    removeButton.addEventListener('click', (event) => {
      event.target.closest('.cards__item').remove();
    });
    cardPicture.addEventListener('click', (event) => {
      const popupPicture = popupZoomPicture.querySelector('.popup__picture');
      popupPicture.src = item.link;
      popupPicture.alt = item.name;
      popupZoomPicture.querySelector('.popup__caption').textContent = item.name;
      openPopup(popupZoomPicture);
    });
    return card;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openPopupProfileEdit() {
  openPopup(popupProfileEdit)
  nameField.value = profileName.textContent;
  professionField.value = profileProfession.textContent;
}

function closePopup(item) {
    item.classList.remove('popup_opened');
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

addButton.addEventListener('click', (event) => {openPopup(popupAddCard)});
editButton.addEventListener('click', openPopupProfileEdit);
popupEditCloseButton.addEventListener('click', (event) => {closePopup(popupProfileEdit)});
popupAddCloseButton.addEventListener('click', (event) => {closePopup(popupAddCard)});
popupZoomCloseButton.addEventListener('click', (event) => {closePopup(popupZoomPicture)});
formProfileEdit.addEventListener('submit', submitProfileEditForm);
formAddCard.addEventListener('submit', submitAddCardForm);

//ВАЛИДАЦИЯ ФОРМ

//Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  // Показываем сообщение об ошибке
  formError.textContent = errorMessage;
  formError.classList.add('popup__input-error_active');
}

//Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.remove('popup__input-error_active');
  formError.textContent = '';
}

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);
  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('popup__button_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__button_inactive');
  }
};

// Вызовем функцию
enableValidation();

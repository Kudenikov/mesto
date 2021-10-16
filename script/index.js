const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__form');

const nameField = document.querySelector('input[name="profile-name"]');
const professionField = document.querySelector('input[name="profile-profession"]');
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

initialCards.forEach(appendCard);

function appendCard(item) {
    const card = createCard(item);
    cards.append(card);
}

function createCard(item) {
    const card = templateItem.querySelector('.cards__item').cloneNode(true);
    card.querySelector('.cards__place').innerText = item.name;
    card.querySelector('.cards__image').src = item.link;
    return card;
}

function openPopup() {
    popup.classList.add('popup_opened');
    nameField.value = profileName.textContent;
    professionField.value = profileProfession.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function submitForm(event) {
    event.preventDefault();
    profileName.textContent = nameField.value;
    profileProfession.textContent = professionField.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', submitForm);
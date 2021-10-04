const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__form');

const nameField = document.querySelector('input[name="profile-name"]');
const professionField = document.querySelector('input[name="profile-profession"]');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession')

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
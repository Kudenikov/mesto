const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__form');

const nameField = document.querySelector('.popup__input_name');
const professionField = document.querySelector('.popup__input_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession')
const likeButton = document.querySelectorAll('.cards__heart-pic');

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

for (let i=0; i<likeButton.length; i++) {
    likeButton[i].addEventListener('click', function() {
        if (likeButton[i].getAttribute('src') === './images/heart.svg') {
        likeButton[i].setAttribute('src', './images/heart-active.svg')}
        else {
            likeButton[i].setAttribute('src', './images/heart.svg')
        }
    })
}
editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', submitForm);
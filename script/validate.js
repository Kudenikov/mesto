//ВАЛИДАЦИЯ ФОРМ

//объект из селекторов и классов
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorUnderlineClass: 'popup__input_type_error',
  inputErrorTextClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__button',
  submitButtonErrorClass: 'popup__button_inactive'
}

//Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, config) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorUnderlineClass);
  formError.textContent = inputElement.validationMessage;
  formError.classList.add(config.inputErrorTextClass);
}

//Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, config) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorUnderlineClass);
  formError.classList.remove(config.inputErrorTextClass);
  formError.textContent = '';
}

//Функция, которая выводит сообщение об ошибке, если поле не валидно, и скрывает, если поле валидно
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
}

//Функция, которая слушает все инпуты, проверяет их валидность и меняет состояние кнопки
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  toggleButtonState(formElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(formElement, config);
    });
  });
}

//Функция, которая выполняет поиск всех форм, предотвращает появление стандартного события при отправке формы и запускает слушателя
const enableValidation = (сonfig) => {
  const formList = Array.from(document.querySelectorAll(сonfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, сonfig);
  });
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

//Функция, которая меняет состояние кнопки отправки формы
function toggleButtonState(formElement, config) {
  const button = formElement.querySelector(config.submitButtonSelector);

  button.disabled = !formElement.checkValidity();
  button.classList.toggle(config.submitButtonErrorClass, !formElement.checkValidity())
}

enableValidation(validationConfig)
  
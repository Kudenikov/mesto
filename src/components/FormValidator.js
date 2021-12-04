//ВАЛИДАЦИЯ ФОРМ

class FormValidator {
  constructor(data, formElement) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._inputErrorUnderlineClass = data.inputErrorUnderlineClass;
    this._inputErrorTextClass = data.inputErrorTextClass;
    this._submitButtonSelector = data.submitButtonSelector;
    this._submitButtonErrorClass = data.submitButtonErrorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._button = this._formElement.querySelector(this._submitButtonSelector)
  }

  //Метод, который выполняет поиск всех форм, предотвращает появление стандартного события при отправке формы и запускает слушателя
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  //Метод, который слушает все инпуты, проверяет их валидность и меняет состояние кнопки
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  //Метод, который меняет состояние кнопки отправки формы
  _toggleButtonState() {
    this._button.disabled = !this._formElement.checkValidity();
    this._button.classList.toggle(this._submitButtonErrorClass, !this._formElement.checkValidity())
  }

  //Метод, который выводит сообщение об ошибке, если поле не валидно, и скрывает, если поле валидно
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //Метод, который добавляет класс с ошибкой
  _showInputError(inputElement) {
    const formError = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorUnderlineClass);
    formError.textContent = inputElement.validationMessage;
    formError.classList.add(this._inputErrorTextClass);
  }

  //Метод, который удаляет класс с ошибкой
  _hideInputError(inputElement) {
    const formError = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorUnderlineClass);
    formError.classList.remove(this._inputErrorTextClass);
    formError.textContent = '';
  }
  
  //Обнуление ошибок, очистка полей формы
  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      inputElement.value = '';
    });
  }
}

export default FormValidator;



  
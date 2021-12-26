(()=>{"use strict";var e=document.querySelector(".profile__name"),t=document.querySelector(".profile__profession"),n=document.querySelector(".profile__avatar"),r=document.querySelector(".profile__avatar-container"),o=document.querySelector(".popup_profile-edit"),i=document.querySelector(".popup_add-card"),u=(document.querySelector(".popup_delete-card"),document.querySelector(".profile__edit-button")),a=document.querySelector(".profile__add-button"),c=document.querySelector(".popup_profile-edit").querySelector(".popup__form_function_profile-edit"),s=i.querySelector(".popup__form_function_add-card"),l=o.querySelector('input[name="profile-name"]'),f=o.querySelector('input[name="profile-profession"]'),p=(i.querySelector('input[name="place-name"]'),i.querySelector('input[name="image-link"]'),{formSelector:".popup__form",inputSelector:".popup__input",inputErrorUnderlineClass:"popup__input_type_error",inputErrorTextClass:"popup__input-error_active",submitButtonSelector:".popup__button",submitButtonErrorClass:"popup__button_inactive"});function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupButton=this._popup.querySelector(".popup__button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":"Сохранить"}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&y(t.prototype,n),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e,t){var n,r=e.removeCard;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._removeCard=r,n._popupDeleteButton=n._popup.querySelector(".popup__button"),n}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._removeCard=e}},{key:"setEventListeners",value:function(){var e=this;b(S(u.prototype),"setEventListeners",this).call(this),this._popupDeleteButton.addEventListener("click",(function(){e._removeCard()}))}}])&&m(t.prototype,n),u}(_);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function q(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup__picture"),t._popupPictureCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupPicture.src=t,this._popupPicture.alt=e,this._popupPictureCaption.textContent=e,P(B(u.prototype),"open",this).call(this)}}])&&L(t.prototype,n),u}(_);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}function N(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e,t){var n,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=r,n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n._popupForm=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;I(D(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){I(D(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&x(t.prototype,n),u}(_);function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const F=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._inputErrorUnderlineClass=t.inputErrorUnderlineClass,this._inputErrorTextClass=t.inputErrorTextClass,this._submitButtonSelector=t.submitButtonSelector,this._submitButtonErrorClass=t.submitButtonErrorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._button=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._button.disabled=!this._formElement.checkValidity(),this._button.classList.toggle(this._submitButtonErrorClass,!this._formElement.checkValidity())}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorUnderlineClass),t.textContent=e.validationMessage,t.classList.add(this._inputErrorTextClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorUnderlineClass),t.classList.remove(this._inputErrorTextClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t),t.value=""}))}}])&&z(t.prototype,n),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n,r,o){var i=o.handleRemoveButton,u=o.handleLikeButton;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._cardSelector=n,this._handleCardClick=r,this._handleRemoveButton=i,this._handleLikeButton=u}var t,n;return t=e,n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".cards__heart-pic"),this._removeButton=this._element.querySelector(".cards__trash"),this._cardPicture=this._element.querySelector(".cards__image"),this._likeCounter=this._element.querySelector(".cards__like-counter"),this._element.querySelector(".cards__place").innerText=this._name,this._cardPicture.src=this._link,this._cardPicture.alt=this._name,this._likeCounter.textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"setHeartColor",value:function(e){this._likes.some((function(t){return t._id===e}))&&this._likeButton.classList.add("cards__heart-pic_like")}},{key:"removeTrash",value:function(e,t){e!==t&&this._removeButton.remove()}},{key:"setLike",value:function(e){this._likeButton.classList.add("cards__heart-pic_like"),this._likeCounter.textContent=e}},{key:"removeLike",value:function(e){this._likeButton.classList.remove("cards__heart-pic_like"),this._likeCounter.textContent=e}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._handleLikeButton()})),this._removeButton.addEventListener("click",(function(){return e._handleRemoveButton(e)})),this._cardPicture.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}}],n&&H(t.prototype,n),e}();const G=J;function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var $=function(){function e(t){var n=t.profileName,r=t.profileProfession,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileProfession=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._profileName.textContent,userProfession:this._profileProfession.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e["profile-name"],this._profileProfession.textContent=e["profile-profession"]}},{key:"setAvatar",value:function(e){this._profileAvatar.src=e.avatar}}])&&M(t.prototype,n),e}();function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W,X=new(function(){function e(t){var n=t.address,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.address=n,this.token=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this.address,"/users/me"),{method:"GET",headers:{authorization:this.token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.address,"/cards"),{method:"GET",headers:{authorization:this.token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this.address,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e["profile-name"],about:e["profile-profession"]})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при обновлении профиля: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this.address,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при добавлении карточки: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при удалении карточки: ".concat(e.status))}))}},{key:"setLike",value:function(e){return fetch("".concat(this.address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this.token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при удалении карточки: ".concat(e.status))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this.address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this.token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при удалении карточки: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this.address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка при обновлении профиля: ".concat(e.status))}))}}])&&K(t.prototype,n),e}())({address:"https://nomoreparties.co/v1/cohort-32",token:"177d42c6-9819-4203-8638-327e1c972af4"});function Y(e){var t=new G(e,".template",te,{handleRemoveButton:function(t){Z.open(),Z.setSubmitAction((function(){X.deleteCard(e._id).then(t.deleteCard()).catch((function(e){console.log("ОШИБКА:",e)})),Z.close()}))},handleLikeButton:function(){e.likes.some((function(e){return e._id===W}))?X.removeLike(e._id).then((function(n){e=n,t.removeLike(e.likes.length)})).catch((function(e){console.log("ОШИБКА:",e)})):X.setLike(e._id).then((function(n){e=n,t.setLike(e.likes.length)})).catch((function(e){console.log("ОШИБКА:",e)}))}}),n=t.createCard();return t.removeTrash(e.owner._id,W),t.setHeartColor(W),n}Promise.all([X.getUserInfo(),X.getInitialCards()]).then((function(r){var o,i,u=(i=2,function(e){if(Array.isArray(e))return e}(o=r)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(o,i)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=u[0],s=u[1];e.textContent=c.name,t.textContent=c.about,n.src=c.avatar,W=c._id;var l=new d({items:s,renderer:function(e){l.addItem(Y(e))}},".cards");l.renderItems();var f=new V({handleFormSubmit:function(e){f.renderLoading(!0);var t={name:e["place-name"],link:e["image-link"]};X.addNewCard(t).then((function(e){l.addItem(Y(e)),f.close()})).catch((function(e){console.log("ОШИБКА:",e)})).finally(f.renderLoading(!0))}},".popup_add-card");f.setEventListeners(),a.addEventListener("click",(function(){ie.resetValidation(),f.open()}))})).catch((function(e){console.log("ОШИБКА:",e)}));var Z=new w({removeCard:function(){}},".popup_delete-card");Z.setEventListeners();var ee=new T(".popup_zoom-picture");function te(e,t){ee.open(e,t)}var ne=new $({profileName:".profile__name",profileProfession:".profile__profession",profileAvatar:".profile__avatar"}),re=new V({handleFormSubmit:function(e){re.renderLoading(!0),X.updateUserInfo(e).then((function(e){return ne.setUserInfo(e)})).catch((function(e){console.log("ОШИБКА:",e)})).finally(re.renderLoading(!1)),re.close()}},".popup_profile-edit"),oe=new F(p,c),ie=new F(p,s);re.setEventListeners(),ee.setEventListeners(),u.addEventListener("click",(function(){oe.resetValidation(),re.open();var e=ne.getUserInfo();l.value=e.userName,f.value=e.userProfession})),r.addEventListener("click",(function(){ue.open()}));var ue=new V({handleFormSubmit:function(e){ue.renderLoading(!0),ne.setAvatar(e),X.updateAvatar(e.avatar).then((function(e){return console.log(e)})).catch((function(e){console.log("ОШИБКА:",e)})).finally(ue.renderLoading(!1)),ue.close()}},".popup_change-avatar");ue.setEventListeners(),oe.enableValidation(),ie.enableValidation()})();
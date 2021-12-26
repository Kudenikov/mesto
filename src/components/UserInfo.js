export default class UserInfo {
    constructor({
        profileName,
        profileProfession,
        profileAvatar
    }) {
      this._profileName = document.querySelector(profileName);
      this._profileProfession = document.querySelector(profileProfession);
      this._profileAvatar = document.querySelector(profileAvatar);
    }

    getUserInfo() {
        const userData = {
            userName: this._profileName.textContent,
            userProfession: this._profileProfession.textContent
        };
        return userData;
    }

    setUserInfo(inputArray) {
        this._profileName.textContent = inputArray['profile-name'];
        this._profileProfession.textContent = inputArray['profile-profession']
    }

    setAvatar(data) {
        this._profileAvatar.src = data['avatar'];
    }
  }
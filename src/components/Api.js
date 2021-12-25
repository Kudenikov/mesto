class Api {
    constructor({address, token}) {
        this.address = address;
        this.token = token;
    }

    getUserInfo() {
        return fetch(`${this.address}/users/me`, {
            method: 'GET',
            headers: {
                'authorization': this.token
            }
        })
        .then(result => {
            if (result.ok) {
                return result.json()
            } else {
                return Promise.reject(`Ошибка: ${result.status}`);
            }
        })
    }

    getInitialCards() {
        return fetch(`${this.address}/cards`, {
            method: 'GET',
            headers: {
                'authorization': this.token
            }
        })
            .then(result => {
                if (result.ok) {
                    return result.json()
                } else {
                    return Promise.reject(`Ошибка: ${result.status}`);
                }
            })
    }

    updateUserInfo(data) {
        return fetch(`${this.address}/users/me`, {
            method: 'PATCH',
            headers: {
                'authorization': this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data['profile-name'],
                about: data['profile-profession']
            })
        })
            .then(result => {
                if (result.ok) {
                    return result.json()
                } else {
                    return Promise.reject(`Ошибка при обновлении профиля: ${result.status}`);
                }
            })
    }

    addNewCard(card) {
        return fetch(`${this.address}/cards`, {
            method: 'POST',
            headers: {
                'authorization': this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: card.name,
                link: card.link
            })
        })
            .then(result => {
                if (result.ok) {
                    return result.json()
                } else {
                    return Promise.reject(`Ошибка при добавлении карточки: ${result.status}`);
                }
            })
    }

    deleteCard(cardId) {
        return fetch(`${this.address}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                'authorization': this.token
            }
        })
            .then(result => {
                if (result.ok) {
                    return result.json()
                } else {
                    return Promise.reject(`Ошибка при удалении карточки: ${result.status}`);
                }
            })
    }
    
    setLike(cardId) {
        return fetch(`${this.address}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                'authorization': this.token
            }
        })
            .then(result => {
                if (result.ok) {
                    return result.json()
                } else {
                    return Promise.reject(`Ошибка при удалении карточки: ${result.status}`);
                }
            })
    }

    removeLike(cardId) {
        return fetch(`${this.address}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                'authorization': this.token
            }
        })
            .then(result => {
                if (result.ok) {
                    return result.json()
                } else {
                    return Promise.reject(`Ошибка при удалении карточки: ${result.status}`);
                }
            })
    }

    updateAvatar(data) {
        return fetch(`${this.address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                'authorization': this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data
            })
        })
            .then(result => {
                if (result.ok) {
                    return result.json()
                } else {
                    return Promise.reject(`Ошибка при обновлении профиля: ${result.status}`);
                }
            })
    }
}

export default Api
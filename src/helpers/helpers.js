const checkResponse = (response) => {
    if (response.ok) {
        return response.json()
    }

    return Promise.reject(`Ошибка: ${response.status}`)
}

const request = (url, options = {}) => fetch(url, options).then(checkResponse);

export { request };

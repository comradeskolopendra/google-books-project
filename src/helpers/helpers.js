const checkResponse = (response) =>
    response.ok
        ? response.json()
        : response.json().then((error) => Promise.reject(error));

const request = (url, options) => fetch(url, options).then(checkResponse);

export { request };

const checkResponse = (response) => {
    if (response.ok) {
        return response.json();
    }

    throw new Error(response)
};

const request = (url, options) => fetch(url, options).then(checkResponse);

export { request };

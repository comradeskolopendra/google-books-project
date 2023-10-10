const checkResponse = (response) => {
    try {
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        throw new Error(response)
    }
};

const request = (url, options) => fetch(url, options).then(checkResponse);

export { request };

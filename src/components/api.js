
export const characterSearch = (query, cb) => {
    const apiKey = '7c5e370a062cbbf21f904fb64863aa55';
    const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
    const url = `${baseUrl}?${query}&apikey=${apiKey}`;
    return fetch(url, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
};

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
};

const parseJSON = (response) => response.json();

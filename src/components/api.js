/**
 * Perform a character search using the marvel api with a public key, to get a list of characters based on the
 * starting letter of the character's name and the page limit and offset for pagination
 * @param {String} query - The query string containing the starting letter , limit and offset -
 * eg: nameStartsWith=L&limit=9&offset=0
 * @param {Function} cb - A callback to call on a successful request
 * @returns {Promise} - A promise that returns the response JSON
 */
export const characterSearch = (query, cb) => {
    const apiKey = '7c5e370a062cbbf21f904fb64863aa55';
    const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
    const url = `${baseUrl}?${query}&apikey=${apiKey}`;
    return fetch(url, {
        accept: "application/json"
    })
        .then(checkStatus)
        .then(response => response.json());
};

/**
 * Check the response status and raise an error for anything other than 200 or 300 response codes
 * @param {Object} response - The response from fetch()
 * @returns {Object} - The response if a 20X / 30X status code was returned
 * @throws {Error} - An error with the status and response if the status code is not a 20X or 30X
 */
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

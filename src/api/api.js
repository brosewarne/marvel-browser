
// @todo: this seems a bit heavy handed, see where it ends up...
const SEARCH_QUERIES = {
    characters: {
        startsWith: (startsWith, limit, offset) => {
            return itemSearchStartsWith('characters', `nameStartsWith=${startsWith}&limit=${limit}&offset=${offset}`);
        }
    },
    comics: {
        startsWith: (startsWith, limit, offset) => {
            return itemSearchStartsWith('comics', `titleStartsWith=${startsWith}&limit=${limit}&offset=${offset}`);
        }
    },
    series: {
        startsWith: (startsWith, limit, offset) => {
            return itemSearchStartsWith('series', `titleStartsWith=${startsWith}&limit=${limit}&offset=${offset}`);
        }
    }
};

export const startsWithApiCall = (itemType, startsWith, limit, offset) => {
    return SEARCH_QUERIES[itemType].startsWith(startsWith, limit, offset);
};

/**
 * Perform a character search using the marvel api with a public key, to get a list of characters based on the
 * starting letter of the character's name and the page limit and offset for pagination
 * @param {String} itemType - character, comic or series
 * @param {String} query - The query string containing the starting letter , limit and offset -
 * eg: nameStartsWith=L&limit=9&offset=0
 * @returns {Promise} - A promise that returns the response JSON on a successful request
 */
export const itemSearchStartsWith = (itemType, query) => {
    const apiKey = '7c5e370a062cbbf21f904fb64863aa55';
    const baseUrl = `https://gateway.marvel.com:443/v1/public/${itemType}`;
    const url = `${baseUrl}?${query}&apikey=${apiKey}`;
    return fetch(url, {
        accept: 'application/json'
    })
        .then(checkStatus)
        .then(response => response.json());
};

/**
 * Find an item bu it's ID
 * CURRENTLY UNUSED, THIS WAS TO BE A PART OF SEARCHING FOR RELATED OOMICS AND CHARACTERS
 * @param {String} itemType - The item type to search for
 * @param {String} id - The id of the itemType to search for
 * @returns {Promise} - A promise that returns the response JSON on a successful request
 */
export const itemSearchById = (itemType, id) => {
    const apiKey = '7c5e370a062cbbf21f904fb64863aa55';
    const baseUrl = `https://gateway.marvel.com:443/v1/public/${itemType}`;
    const url = `${baseUrl}/${id}&apikey=${apiKey}`;
    return fetch(url, {
        accept: 'application/json'
    })
        .then(checkStatus)
        .then(response => response.json());
};

export const randomSearch = (itemType) => {
    const totals = {
        characters: 1491,
        comics: 41694,
        series: 10071
    };
    const itemNumber = Math.floor(Math.random() * totals[itemType]);
    const apiKey = '7c5e370a062cbbf21f904fb64863aa55';
    const baseUrl = `https://gateway.marvel.com:443/v1/public/${itemType}`;
    const url = `${baseUrl}?limit=1&offset=${itemNumber}&apikey=${apiKey}`;
    return fetch(url, {
        accept: 'application/json'
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
    if (response.status >= 200 && response.status <= 302) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
};

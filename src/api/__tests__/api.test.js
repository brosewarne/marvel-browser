import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { characterSearch } from '../api';

configure({ adapter: new Adapter() });

const mockResponse = (status, statusText, response) => {
    return {
        body: JSON.stringify(response),
        status,
        statusText,
        headers: {
            'Content-type': 'application/json'
        }
    };
};

describe('characterSearch()', () => {
    it('returns the response for 20X HTTP statuses', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
            mockResponse(200, null, ['char1', 'char2'])));
        const query = 'nameStartsWith=A&limit=9&offset=0';
        characterSearch(query).then((response) => {
            expect(response).toEqual(['char1', 'char2']);
        });
    });

    it('returns the response for 30X HTTP statuses', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
            mockResponse(302, null, ['char1', 'char2'])));
        const query = 'nameStartsWith=A&limit=9&offset=0';
        characterSearch(query).then((response) => {
            expect(response).toEqual(['char1', 'char2']);
        });
    });

    it('returns an error for 40X HTTP statuses', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
            mockResponse(400, 'Bad Request', 'the passed query is invalid')));
        const query = 'nameStartsWith=A&limit=9&offset=0';
        characterSearch(query).then((response) => {
            expect(response).toEqual('the passed query is invalid\'');
        });
    });
});

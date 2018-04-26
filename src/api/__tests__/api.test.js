import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { itemSearchStartsWith } from '../api';

configure({ adapter: new Adapter() });

const mockResponse = (status, statusText, response) => {
    return {
        status,
        statusText,
        headers: {
            'Content-type': 'application/json'
        },
        json: () => { return response; }
    };
};

describe('itemSearchStartsWith()', () => {
    it('returns the response for 20X HTTP statuses for characters', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
            mockResponse(200, null, ['char1', 'char2'])));
        const query = 'nameStartsWith=A&limit=9&offset=0';
        itemSearchStartsWith('characters', query).then((response) => {
            expect(response).toEqual(['char1', 'char2']);
        });
    });

    it('returns the response for 30X HTTP statuses', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
            mockResponse(302, null, ['char1', 'char2'])));
        const query = 'nameStartsWith=A&limit=9&offset=0';
        itemSearchStartsWith('characters', query).then((response) => {
            expect(response).toEqual(['char1', 'char2']);
        });
    });

    it('returns an error for 40X HTTP statuses', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
            mockResponse(400, 'Bad Request', 'the passed query is invalid')));
        const query = 'nameStartsWith=A&limit=9&offset=0';
        itemSearchStartsWith('characters', query).then((response) => {
            expect(response).toEqual('the passed query is invalid\'');
        });
    });

    it('returns the response for 20X HTTP statuses for comics', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
            mockResponse(200, null, ['c1', 'c2'])));
        const query = 'nameStartsWith=A&limit=9&offset=0';
        itemSearchStartsWith('comics', query).then((response) => {
            expect(response).toEqual(['c1', 'c2']);
        });
    });

    it('returns the response for 20X HTTP statuses for series', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
            mockResponse(200, null, ['s1', 's2'])));
        const query = 'nameStartsWith=A&limit=9&offset=0';
        itemSearchStartsWith('series', query).then((response) => {
            expect(response).toEqual(['s1', 's2']);
        });
    });

});

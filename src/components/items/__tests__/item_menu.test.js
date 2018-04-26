import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { ItemMenu } from '../item_menu';

configure({ adapter: new Adapter() });

const createMockCharacters = (numCharacters) => {
    const mocks = [];
    for (let i = 0; i < numCharacters; i++) {
        mocks.push({
            id: i,
            name: `Character_${i}`,
            thumbnail: {
                path: '/a/href/to/an/image',
                extension: 'png'
            }
        });
    }
    return mocks;
};


describe('<ItemMenu />', () => {
    // no need to use real ItemTitle components here.
    const mockItemTiles = [
        <span key="c1">Character 1</span>,
        <span key="c2">Character 2</span>,
        <span key="c3">Character 3</span>,
        <span key="c4">Character 4</span>,
        <span key="c5">Character 5</span>,
        <span key="c6">Character 6</span>,
        <span key="c7">Character 7</span>,
        <span key="c8">Character 8</span>,
        <span key="c9">Character 9</span>,
        <span key="c10">Character 10</span>
    ];

    const params = {
        currentPage: 1,
        startsWith: 'A'
    };

    it('renders the loading spinner correctly', () => {
        const wrapper = shallow(
            <ItemMenu params={params} itemType="characters" />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders the loaded page correctly', () => {

        const mockItems = createMockCharacters(10);

        const wrapper = shallow(
            <ItemMenu params={params} itemType="characters" />
        );
        wrapper.setState({ loading: false, totalPages: 10, items: mockItems });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});

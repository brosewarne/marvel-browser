import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { ItemGrid } from '../item_grid';

configure({ adapter: new Adapter() });

describe('<ItemGrid />', () => {
    // no need to use real ItemTile components here.
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

    it('renders correctly', () => {
        const wrapper = shallow(
            <ItemGrid itemTiles={mockItemTiles} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders 4 character rows', () => {
        const wrapper = mount(
            <ItemGrid itemTiles={mockItemTiles} />
        );
        expect(wrapper.find('.itemRow')).toHaveLength(4);
    });

    it('renders 3 characters per row until the last row', () => {
        const wrapper = mount(
            <ItemGrid itemTiles={mockItemTiles} />
        );
        expect(wrapper.find('.itemRow').first().children()).toHaveLength(3);
        expect(wrapper.find('.itemRow').last().children()).toHaveLength(1);
    });
});

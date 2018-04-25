import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { CharacterPage } from '../character_page';

configure({ adapter: new Adapter() });

describe('<CharacterPage />', () => {
    const mockCharacter = {
        id: 1009146,
        name: 'Abomination',
        thumbnail: {
            path: '/a/href/to/an/image',
            extension: 'png'
        },
        description: 'He\'s an abomination',
        comics: {
            available: 10
        },
        series: {
            available: 2
        },
        stories: {
            available: 5
        }
    };
    it('renders correctly', () => {
        const location = { state: { data: mockCharacter } };
        const wrapper = shallow(
            <CharacterPage location={location} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

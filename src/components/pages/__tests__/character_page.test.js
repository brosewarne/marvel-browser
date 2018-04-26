import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { _CharacterPage } from '../character_page';

configure({ adapter: new Adapter() });

describe('<_CharacterPage />', () => {
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
        },
        urls: [
            {
                url: '/aURL',
                type: 'wiki'
            }
        ]
    };
    it('renders correctly', () => {
        const wrapper = shallow(
            <_CharacterPage item={mockCharacter} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { CharacterImage } from '../../characters/character_image';

configure({ adapter: new Adapter() });

describe('<CharacterTile />', () => {
    const mockCharacter = {
        id: 1009146,
        name: 'Abomination',
        thumbnail: {
            path: '/a/href/to/an/image',
            extension: 'png'
        }
    };
    it('renders correctly', () => {
        const wrapper = shallow(
            <CharacterImage character={mockCharacter} imgSize="portrait_medium" />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
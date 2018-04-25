import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { AlphabetMenu } from '../alphabet_menu';

configure({ adapter: new Adapter() });

describe('<AlphabetMenu />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <AlphabetMenu />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

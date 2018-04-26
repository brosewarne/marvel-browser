import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { HeaderMenu } from '../header_menu';

configure({ adapter: new Adapter() });

describe('<HeaderMenu />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <HeaderMenu menuName="ManuName" menuOptions={[{ href: '/ahref', name: 'option1' }, { href: '/bhref', name: 'option2' }]} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { PaginationMenu } from '../pagination_menu';

configure({ adapter: new Adapter() });

describe('<PaginationMenu />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <PaginationMenu totalPages={15} startsWith="A" />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('doesn\'t render if totalPages is 0', () => {
        const wrapper = shallow(
            <PaginationMenu totalPages={0} startsWith="A" />
        );
        expect(toJson(wrapper)).toBeFalsy();
    });
});

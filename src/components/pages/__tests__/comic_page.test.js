import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { ComicPage } from '../comic_page';

configure({ adapter: new Adapter() });

describe('<ComicPage />', () => {
    const mockComic = {
        title: 'Comic Title',
        description: 'Comic Description',
        thumbnail: {
            path: '/a/href/to/an/image',
            extension: 'png'
        }
    };
    it('renders correctly', () => {
        const location = { state: { data: mockComic } };
        const wrapper = shallow(
            <ComicPage location={location} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { _ComicPage } from '../comic_page';

configure({ adapter: new Adapter() });

describe('<_ComicPage />', () => {
    const mockComic = {
        title: 'Comic Title',
        description: 'Comic Description',
        thumbnail: {
            path: '/a/href/to/an/image',
            extension: 'png'
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
            <_ComicPage item={mockComic} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

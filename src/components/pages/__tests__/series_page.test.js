import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { _SeriesPage } from '../series_page';

configure({ adapter: new Adapter() });

describe('<_SeriesPage />', () => {
    const mockSeries = {
        title: 'Series Title',
        description: 'Series Description',
        startYear: '1990',
        endYear: '2000',
        type: 'Series Type',
        thumbnail: {
            path: '/a/href/to/an/image',
            extension: 'png'
        },
        comics: {
            available: 10
        },
        characters: {
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
            <_SeriesPage item={mockSeries} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

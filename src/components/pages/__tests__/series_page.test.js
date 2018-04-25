import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { SeriesPage } from '../series_page';

configure({ adapter: new Adapter() });

describe('<SeriesPage />', () => {
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
        }
    };
    it('renders correctly', () => {
        const location = { state: { data: mockSeries } };
        const wrapper = shallow(
            <SeriesPage location={location} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

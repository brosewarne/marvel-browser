import React from 'react';
import PropTypes from 'prop-types';

import { ItemImage } from '../items/item_image';

import './pages.css';

/**
 * Render the SeriesPage, showing a profile of the selected series
 * @param {Object} props - The set of props for the SeriesPage - passed from the route
 * @returns {Node} - The rendered SeriesPage
 * @constructor
 */
export const SeriesPage = (props) => {
    const { data } = props.location.state;
    const {
        title, description, startYear, endYear, type, stories, comics, characters
    } = data;

    return (
        <div>
            <content className="pageContainer">
                <div className="itemProfile">
                    <h1 className="itemProfileTitle">{title}</h1>
                    <ItemImage item={data} imgSize="portrait_uncanny" />
                    <p>{description || 'No series description available'}</p>
                    <p>Type: {type}</p>
                    <p>Start Year: {startYear}</p>
                    <p>End Year: {endYear}</p>
                    <p>{`${characters.available} Characters`}</p>
                    <p>{`${comics.available} Comics`}</p>
                    <p>{`${stories.available} Stories`}</p>
                </div>
            </content>
        </div>
    );
};

SeriesPage.propTypes = {
    location: PropTypes.object.isRequired
};

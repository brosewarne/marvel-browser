import React from 'react';
import PropTypes from 'prop-types';

import { ItemImage } from '../items/item_image';

import './pages.css';

/**
 * Render the ComicPage, showing a profile of the selected comic
 * @param {Object} props - The set of props for the ComicPage - passed from the route
 * @returns {Node} - The rendered ComicPage
 * @constructor
 */
export const ComicPage = (props) => {
    const { data } = props.location.state;
    const {
        title, description, dates
    } = data;

    return (
        <div>
            <content className="pageContainer">
                <div className="itemProfile">
                    <h1 className="itemProfileTitle">{title}</h1>
                    <ItemImage item={data} imgSize="portrait_uncanny" />
                    <p>{description || 'No comic description available'}</p>
                </div>
            </content>
        </div>
    );
};

ComicPage.propTypes = {
    location: PropTypes.object.isRequired
};

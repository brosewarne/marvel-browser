import React from 'react';
import PropTypes from 'prop-types';

import { ItemImage } from '../items/item_image';

import './pages.css';

/**
 * Render the CharacterPage, showing a profile of the selected character
 * @param {Object} props - The set of props for the CharacterPage - passed from the route
 * @returns {Node} - The rendered CharacterPage
 * @constructor
 */
export const CharacterPage = (props) => {
    const { data } = props.location.state;
    const {
        name, description, comics, series, stories
    } = data;

    return (
        <div>
            <content className="pageContainer">
                <div className="itemProfile">
                    <h1 className="itemProfileTitle">{name}</h1>
                    <ItemImage item={data} imgSize="portrait_uncanny" />
                    <p>{description || 'No character description available'}</p>
                    <p>{`${comics.available} Comics`}</p>
                    <p>{`${series.available} Series`}</p>
                    <p>{`${stories.available} Stories`}</p>
                </div>
            </content>
        </div>
    );
};

CharacterPage.propTypes = {
    location: PropTypes.object.isRequired
};

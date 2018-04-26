import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Object} item - The JSON definition of an item - ie a character, comic or story
 * @param {String} imgSize - The size of image to use - eg portrait_medium, portrait_uncanny
 * @returns {Node} - The rendered ItemImage
 * @constructor
 */
export const ItemImage = ({ item, imgSize = 'portrait_medium' }) => {
    const { path, extension } = item.thumbnail;
    const imageUrl = `${path}/${imgSize}.${extension}`;
    return (
        <picture>
            <img src={imageUrl} alt={item.name} />
        </picture>
    );
};

ItemImage.propTypes = {
    item: PropTypes.object.isRequired,
    imgSize: PropTypes.string
};

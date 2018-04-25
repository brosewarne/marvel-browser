import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Object} character - The JSON definition of a character
 * @param {String} imgSize - The size of image to use - eg portrait_medium, portrait_uncanny
 * @returns {Node} - The rendered CharacterImage
 * @constructor
 */
export const CharacterImage = ({ character, imgSize = 'portrait_medium' }) => {
    const { path, extension } = character.thumbnail;
    const imageUrl = `${path}/${imgSize}.${extension}`;
    return (
        <picture>
            <img src={imageUrl} alt={character.name} />
        </picture>
    );
};

CharacterImage.propTypes = {
    character: PropTypes.object.isRequired,
    imgSize: PropTypes.string.isRequired
};

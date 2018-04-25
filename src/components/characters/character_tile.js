import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CharacterImage } from './character_image';

import './character.css';

/**
 * Render a single CharacterTile
 * @param {Object} character - The character JSON definition
 * @param {String} imgSize - The size of image to use - eg portrait_medium, portrait_uncanny
 * @returns {Node} - The rendered CharacterTile
 * @constructor
 */
export const CharacterTile = ({ character, imgSize = 'portrait_medium' }) => {
    const characterImage = <CharacterImage imgSize={imgSize} character={character} />;
    const href = `/character/${character.id}`;
    return (
        <div className="characterTile" key={`${character.id}_tile`}>
            <h1 className="characterTitle">{character.name}</h1>
            <Link
                href={href}
                to={{ pathname: href, state: { character } }}
                title={`Click to see ${character.name}'s profile`}
            >
                {characterImage}
            </Link>
        </div>
    );
};

CharacterTile.propTypes = {
    character: PropTypes.object.isRequired,
    imgSize: PropTypes.string.isRequired
};

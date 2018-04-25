import React from 'react';
import PropTypes from 'prop-types';

import { CharacterImage } from './character_image';

import './character.css';

/**
 * Render the CharacterPage, showing a profile pof the selected character
 * @param {Object} props - The set of props for the CharacterPage - passed from the route
 * @returns {Node} - The rendered CharacterPage
 * @constructor
 */
export const CharacterPage = (props) => {
    const { character } = props.location.state;
    const {
        name, description, comics, series, stories
    } = character;

    return (
        <div>
            <content className="characterPage">
                <div className="characterProfile">
                    <h1 className="characterProfileTitle">{name}</h1>
                    <CharacterImage character={character} imgSize="portrait_uncanny" />
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

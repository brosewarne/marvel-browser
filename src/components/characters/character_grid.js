import PropTypes from 'prop-types';
import React from 'react';
import './character.css';

/**
 * Add the rendered CharacterTiles to a 3x3 grid
 * @param {Array} characterTiles - The array of rendered CharacterTiles
 * @returns {Node} - The rendered CharacterGrid
 * @constructor
 */
export const CharacterGrid = ({ characterTiles }) => {
    const rows = [];
    for (let i = 0; i < characterTiles.length; i++) {
        if (i % 3 !== 0) {
            // @todo: make characters per row a prop
            continue;
        }
        rows.push(
            <div className="characterRow" key={`characterRow_${i}`}>
                {characterTiles.slice(i, i + 3)}
            </div>
        );
    }

    return (
        <div className="characterGrid">
            {rows}
        </div>
    );
};

CharacterGrid.propTypes = {
    characterTiles: PropTypes.array.isRequired
};

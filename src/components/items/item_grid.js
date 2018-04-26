import PropTypes from 'prop-types';
import React from 'react';
import './items.css';

/**
 * Add the rendered ItemTiles to a 3x3 grid
 * @param {Array} itemTiles - The array of rendered ItemTiles
 * @returns {Node} - The rendered ItemGrid
 * @constructor
 */
export const ItemGrid = ({ itemTiles }) => {
    const rows = [];
    for (let i = 0; i < itemTiles.length; i++) {
        if (i % 3 !== 0) {
            // @todo: make characters per row a prop
            continue;
        }
        rows.push(
            <div className="itemRow" key={`itemRow_${i}`}>
                {itemTiles.slice(i, i + 3)}
            </div>
        );
    }

    return (
        <div className="itemGrid">
            {rows}
        </div>
    );
};

ItemGrid.propTypes = {
    itemTiles: PropTypes.array.isRequired
};

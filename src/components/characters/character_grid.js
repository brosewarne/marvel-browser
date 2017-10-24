import React from "react";
import "./character.css";

/**
 * Add the rendered CharacterTiles to a 3x3 grid
 * @param {Array} characterTiles - The array of rendered CharacterTiles
 * @returns {Node}
 * @constructor
 */
export const CharacterGrid = ({ characterTiles }) => {
    const rows = [];
    for (let i=0; i<characterTiles.length; i++) {
        if (i%3 !== 0) {
            continue
        }
        rows.push(
            <div className="characterRow" key={`characterRow_${i}`}>
                {characterTiles.slice(i, i+3)}
            </div>
        )
    }

    return (
        <div className="characterGrid">
            {rows}
        </div>
    )
};

import React from "react";
import "./character.css";

export const CharacterGrid = ({ characterTiles }) => {
    const rows = [];
    for (let i=0; i<characterTiles.length; i++) {
        if (i%3 !== 0) {
            continue
        }
        rows.push(
            <div className="characterRow-lg" key={`characterRow_${i}`}>
                {characterTiles.slice(i, i+3)}
            </div>
        )
    }

    return (
        <div className="characterGrid-lg">
            {rows}
        </div>
    )
};

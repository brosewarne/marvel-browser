import React from "react";
import { Link } from "react-router-dom"
import { CharacterImage } from "./character_image";

import "./character.css";

/**
 * Render a single CharacterTile
 * @param {Object} character - The character JSON definition
 * @param {String} imgSize - The size of image to use - eg portrait_medium, portrait_uncanny
 * @returns {Node} - The rendered CharacterTile
 * @constructor
 */
export const CharacterTile = ({ character, imgSize="portrait_medium" }) => {
    const characterImage = <CharacterImage imgSize={imgSize} character={character} />
    return (
        <div className="characterTile" key={`${character.id}_tile`}>
            <h1 className="characterTitle">{character.name}</h1>
            <Link
                to={{pathname: `/character/${character.id}`, state:{character: character}}}
                title={`Click to see ${character.name}'s profile`}
            >
                {characterImage}
            </Link>
        </div>
    )
};

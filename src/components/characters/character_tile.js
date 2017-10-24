import React from "react";
import { Link } from "react-router-dom"
import { CharacterImage } from "./character_image";

import "./character.css";

export const CharacterTile = ({ character, imgSize="portrait_medium" }) => {
    const characterImage = <CharacterImage imgSize={imgSize} character={character} />
    return (
        <div className="characterTile-lg" key={`${character.id}_tile`}>
            <h1 className="characterTitle">{character.name}</h1>
            <Link to={{pathname: `/character/${character.id}`, state:{character: character}}} title={`Click to see ${character.name}'s profile`}>
                {characterImage}
            </Link>
        </div>
    )
};

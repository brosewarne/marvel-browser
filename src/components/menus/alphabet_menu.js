import React from "react";
import { Link } from "react-router-dom"

import "./menu.css";

/**
 * Render the AlphabetMenu - used for selecting a new `startsWith` letter.
 * @returns {Node} - The rendered AlphabetMenu
 * @constructor
 */
export const AlphabetMenu = () => {
    const alphabet = "3ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const alphabetTiles = alphabet.map((character) => {
        return (
            <div className="menuTile" key={`alphabet_${character}_div`}>
                <Link to={`/${character}/1`} key={`alphabet_${character}`}>{character}</Link>
            </div>
        )});
    return (
        <div className={"menu"}>
            {alphabetTiles}
        </div>
    )
};

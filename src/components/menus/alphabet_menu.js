import React from "react";
import { Link } from "react-router-dom"

import "./menu.css";

export const AlphabetMenu = ({ dispatch }) => {
    const alphabet = "3ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const alphabetTiles = alphabet.map((character) => {
        return (
            <div className="menuTile">
                <Link to={`/${character}/1`}>{character}</Link>
            </div>
        )});
    return (
        <div className={"menu"}>
            {alphabetTiles}
        </div>
    )
};

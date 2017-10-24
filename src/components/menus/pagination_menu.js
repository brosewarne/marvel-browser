import React from "react";
import { Link } from "react-router-dom"
import "./menu.css";

/**
 * Create a pagination menu for navigating through each set of characters.
 * @returns {Node|null} - The pagination menu, or null if no characters have been loaded.
 */
export const PaginationMenu = ({ totalCharacters, charactersPerPage, currentPage, startsWith }) => {
    if (!totalCharacters) {
        return null;
    }

    const numPages = Math.ceil(totalCharacters / charactersPerPage);
    const pageTiles = [];
    for (let i = 0; i<numPages; i++) {
        pageTiles.push(
            <div className="menuTile"  key={`pagination_div_${i}`}>
                <Link to={`/${startsWith}/${i+1}`} key={`pagination_${i}`}>{i + 1}</Link>
            </div>
        )
    }
    return (
        <div className="menu">
            {pageTiles}
        </div>
    )
};
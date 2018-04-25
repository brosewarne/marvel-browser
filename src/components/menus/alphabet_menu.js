import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

import './menu.css';

/**
 * Render the AlphabetMenu - used for selecting a new `startsWith` letter.
 * @returns {Node} - The rendered AlphabetMenu
 * @constructor
 */
export const AlphabetMenu = () => {
    const alphabet = '3ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const alphabetTiles = alphabet.map((letter) => {
        const href = `/characters/${letter}/1`;
        return (
            <Button variant="raised" color="primary" size="small" key={`alphabet_${letter}_div`}>
                <Link href={href} to={href} key={`alphabet_${letter}`}>{letter}</Link>
            </Button>
        );
    });
    return (
        <div className="menu">
            {alphabetTiles}
        </div>
    );
};

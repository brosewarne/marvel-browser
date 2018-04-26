import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import './menu.css';

/**
 * Render a PaginationMenu for navigating through each set of characters.
 * @returns {Node|null} - The pagination menu, or null if no characters have been loaded.
 */
export const PaginationMenu = ({ totalPages, startsWith, loading }) => {
    if (!totalPages || loading) {
        return null;
    }

    const pageTiles = [];
    for (let i = 0; i < totalPages; i++) {
        const href = `/characters/${startsWith}/${i + 1}`;
        pageTiles.push(
            <Button variant="raised" color="primary" size="small" key={`pagination_div_${i}`}>
                <Link href={href} to={href} key={`pagination_${i}`}>{i + 1}</Link>
            </Button>
        );
    }
    return (
        <div className="menu">
            {pageTiles}
        </div>
    );
};

PaginationMenu.propTypes = {
    totalPages: PropTypes.number.isRequired,
    startsWith: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
};

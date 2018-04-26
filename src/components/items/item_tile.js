import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

import { ItemImage } from '../items/item_image';

import './items.css';

/**
 * Render a single CharacterTile
 * @param {Object} item - The item JSON definition
 * @param {String} itemType - The type of item - character, comic or series
 * @param {String} imgSize - The size of image to use - eg portrait_medium, portrait_uncanny
 * @returns {Node} - The rendered CharacterTile
 * @constructor
 */
export const ItemTile = ({ item, itemType, imgSize = 'portrait_medium' }) => {
    const characterImage = <ItemImage imgSize={imgSize} item={item} />;
    const href = `/${itemType}/id/${item.id}`;
    return (
        <Paper elevation={12} className="itemTile" key={`${item.id}_tile`}>
            <h1 className="itemTitle">{item.name || item.title}</h1>
            <Link
                href={href}
                to={{ pathname: href, state: { item } }}
                title={`Click to see ${item.name}'s profile`}
            >
                {characterImage}
            </Link>
        </Paper>
    );
};

ItemTile.propTypes = {
    item: PropTypes.object.isRequired,
    itemType: PropTypes.string.isRequired,
    imgSize: PropTypes.string
};

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { getDetailLinks } from './utils';
import { ItemImage } from '../items/item_image';

import './pages.css';

/**
 * Render the CharacterPage, showing a profile of the selected character
 * @param {Object} props - The set of props for the CharacterPage - passed from the route
 * @returns {Node} - The rendered CharacterPage
 * @constructor
 */
export const _CharacterPage = (props) => {
    const {
        name, description, comics, series, stories, urls
    } = props.item;

    return (
        <div>
            <content className="pageContainer">
                <Paper elevation={12} className="itemProfile">
                    <h1 className="itemProfileTitle">{name}</h1>
                    <ItemImage item={props.item} imgSize="portrait_uncanny" />
                    <Typography align="center" variant="body2">
                        <p>{description || 'No character description available'}</p>
                        <p>{`${comics.available} Comics`}</p>
                        <p>{`${series.available} Series`}</p>
                        <p>{`${stories.available} Stories`}</p>
                    </Typography>
                    {getDetailLinks(props.item)}
                </Paper>
            </content>
        </div>
    );
};

_CharacterPage.propTypes = {
    item: PropTypes.object.isRequired
};

/**
 * If item is not supplied from props, get it from the app state
 * @param {Object} state - The current app state
 * @param {Object} props - The incoming set of props
 * @returns {Object} - Empty id item is already in props, otherwise, the mapped item from app state
 */
const mapStateToProps = (state, props) => {
    return props.item ? {} : {
        item: state.routing.location.state.item
    };
};

export const CharacterPage = connect(mapStateToProps)(_CharacterPage);

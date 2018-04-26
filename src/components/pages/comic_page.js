import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import { ItemImage } from '../items/item_image';

import './pages.css';

/**
 * Render the ComicPage, showing a profile of the selected comic
 * @param {Object} props - The set of props for the ComicPage - passed from the route
 * @returns {Node} - The rendered ComicPage
 * @constructor
 */
export const _ComicPage = (props) => {
    const {
        title, description
    } = props.item;

    return (
        <div>
            <content className="pageContainer">
                <Paper elevation={12} className="itemProfile">
                    <h1 className="itemProfileTitle">{title}</h1>
                    <ItemImage item={props.item} imgSize="portrait_uncanny" />
                    <p>{description || 'No comic description available'}</p>
                </Paper>
            </content>
        </div>
    );
};

_ComicPage.propTypes = {
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
        item: state.routing.location.state.data
    };
};

export const ComicPage = connect(mapStateToProps)(_ComicPage);

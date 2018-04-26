import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import { ItemImage } from '../items/item_image';

import './pages.css';

/**
 * Render the SeriesPage, showing a profile of the selected series
 * @param {Object} props - The set of props for the SeriesPage - passed from the route
 * @returns {Node} - The rendered SeriesPage
 * @constructor
 */
export const _SeriesPage = (props) => {
    const {
        title, description, startYear, endYear, type, stories, comics, characters
    } = props.item;

    return (
        <div>
            <content className="pageContainer">
                <Paper elevation={12} className="itemProfile">
                    <h1 className="itemProfileTitle">{title}</h1>
                    <ItemImage item={props.item} imgSize="portrait_uncanny" />
                    <p>{description || 'No series description available'}</p>
                    <p>Type: {type}</p>
                    <p>Start Year: {startYear}</p>
                    <p>End Year: {endYear}</p>
                    <p>{`${characters.available} Characters`}</p>
                    <p>{`${comics.available} Comics`}</p>
                    <p>{`${stories.available} Stories`}</p>
                </Paper>
            </content>
        </div>
    );
};

_SeriesPage.propTypes = {
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

export const SeriesPage = connect(mapStateToProps)(_SeriesPage);

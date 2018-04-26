import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

import { startsWithApiCall } from '../../api/api';
import { ItemTile } from './item_tile';
import { ItemGrid } from './item_grid';
import { PaginationMenu } from '../menus/pagination_menu';
import { AlphabetMenu } from '../menus/alphabet_menu';

import './items.css';
import '../../App.css';

import loading from '../../loading.svg';

class ItemMenu extends Component {
    static propTypes = {
        params: PropTypes.object.isRequired,
        itemType: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            startsWith: 'A',
            items: [],
            itemsPerPage: 9,
            currentPage: 1,
            totalPages: 0
        };
    }

    /**
     * Get the data for the set of items based on `startsWith`, `currentPage` and `itemsPerPage` and set
     * the item list and total items to internal state
     */
    getItemData = () => {
        const { startsWith, itemsPerPage, currentPage } = this.state;
        const offset = itemsPerPage * (currentPage - 1);
        // @todo handle AJAX request errors here
        startsWithApiCall(this.props.itemType, startsWith, itemsPerPage, offset).then((response) => {
            this.setState({
                loading: false,
                items: response.data.results,
                totalPages: Math.ceil(response.data.total / this.state.itemsPerPage)
            });
        });
    };

    /**
     * Get the initial set of item data when the page mounts.
     */
    componentWillMount = () => {
        this.setState({ ...this.props.params }, this.getItemData);
    };

    /**
     * Update the set of item data when the route changes
     * @param {Object} nextProps - The incoming set of props
     */
    componentWillReceiveProps = (nextProps) => {
        this.setState({ ...nextProps.params, loading: true }, this.getItemData);
    };

    /**
     * Get the pagination menu for the current set of items
     * @returns {Node} - The rendered PaginationMenu
     */
    getPaginationMenu = () => {
        const { totalPages, startsWith } = this.state;
        return (
            <PaginationMenu
                totalPages={totalPages}
                startsWith={startsWith}
                loading={this.state.loading}
            />
        );
    };

    /**
     * Get the pagination details for display - eg Page 1 of 10
     * @returns {Node} - The pagination details
     */
    getPaginationDetails = () => {
        return (
            !this.state.loading && (
                <Typography variant="headline">
                    <strong>Browsing {this.state.startsWith} {this.props.itemType} - Page {this.state.currentPage} of {this.state.totalPages}</strong>
                </Typography>
            )
        );
    };

    /**
     * Return an alphabet menu for viewing items that start with each letter of the alphabet
     * @returns {Node} - The rendered AlphabetMenu
     */
    getAlphabetMenu = () => {
        return <AlphabetMenu itemType={this.props.itemType} />;
    };

    /**
     * Create a set of item tiles for the current set of items.
     * @returns {Array} - The array of rendered ItemTile
     */
    getItemTiles = () => {
        return this.state.items.map((item) => {
            return <ItemTile item={item} itemType={this.props.itemType} key={`item_tile_${item.id}`} />;
        });
    };

    /**
     * Create a loading Image with text.
     * @returns {Node} - The loading image and text
     */
    getLoadingImage = () => {
        return (
            <div>
                <h1>
                    LOADING {this.props.itemType.toUpperCase()}.....
                </h1>
                <div>
                    <img src={loading} className="loadingSpinner" alt="loading" />
                </div>
            </div>
        );
    };

    /**
     * Create a grid of item tiles for the current set of items.
     * @returns {Node} - The item grid
     */
    getItemGrid = () => {
        if (this.state.loading) {
            return this.getLoadingImage();
        }
        const itemTiles = this.getItemTiles();
        return <ItemGrid itemTiles={itemTiles} />;
    };

    render() {
        return (
            <div>
                <section>
                    {this.getAlphabetMenu()}
                </section>
                <content>
                    {this.getPaginationDetails()}
                    {this.getItemGrid()}
                    {this.getPaginationMenu()}
                </content>
            </div>
        );
    }
}

export { ItemMenu };

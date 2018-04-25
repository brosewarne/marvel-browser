import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { characterSearch } from '../../api/api';
import { CharacterTile } from './character_tile';
import { CharacterGrid } from './character_grid';
import { PaginationMenu } from '../menus/pagination_menu';
import { AlphabetMenu } from '../menus/alphabet_menu';

import './character.css';
import loading from './loading.svg';

class CharacterMenu extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            startsWith: 'A',
            characters: [],
            // totalCharacters: 0,
            charactersPerPage: 9,
            currentPage: 1,
            totalPages: 0
        };
    }

    /**
     * Get the data for the set of characters based on `startsWith`, `currentPage` and `charactersPerPage` and set
     * the character list and total characters to internal state
     */
    getCharacterData = () => {
        const { startsWith, charactersPerPage, currentPage } = this.state;
        const offset = charactersPerPage * (currentPage - 1);
        const query = `nameStartsWith=${startsWith}&limit=${charactersPerPage}&offset=${offset}`;
        // @todo handle AJAX request errors here
        characterSearch(query).then((response) => {
            this.setState({
                loading: false,
                characters: response.data.results,
                // totalCharacters: response.data.total,
                totalPages: Math.ceil(response.data.total / this.state.charactersPerPage)
            });
        });
    };

    /**
     * Get the initial set of character data when the page mounts.
     */
    componentWillMount = () => {
        this.setState({ ...this.props.match.params }, this.getCharacterData);
    };

    /**
     * Update the set of character data when the route changes
     * @param {Object} nextProps - The incoming set of props
     */
    componentWillReceiveProps = (nextProps) => {
        this.setState({ ...nextProps.match.params }, this.getCharacterData);
    };

    /**
     * Get the pagination menu for the current set of characters
     * @returns {Node} - The rendered PaginationMenu
     */
    getPaginationMenu = () => {
        const { totalPages, startsWith } = this.state;
        return (
            <PaginationMenu
                totalPages={totalPages}
                startsWith={startsWith}
            />
        );
    };

    /**
     * Get the pagination details for display - eg Page 1 of 10
     * @returns {Node} - The pagination details
     */
    getPaginationDetails = () => {
        return (
            <strong>Page {this.state.currentPage} of {this.state.totalPages}</strong>
        );
    };

    /**
     * Return an alphabet menu for viewing characters that start with each letter of the alphabet
     * @returns {Node} - The rendered AlphabetMenu
     */
    getAlphabetMenu = () => {
        return <AlphabetMenu dispatch={this.props.dispatch} />;
    };

    /**
     * Create a set of character tiles for the current set of characters.
     * @returns {Array} - The array of rendered CharacterTiles
     */
    getCharacterTiles = () => {
        return this.state.characters.map((character) => {
            return <CharacterTile character={character} key={`character_tile_${character.id}`} />;
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
                    LOADING CHARACTERS.....
                </h1>
                <div>
                    <img src={loading} className="loadingSpinner" alt="loading" />
                </div>
            </div>
        );
    };

    /**
     * Create a grid of character tiles for the current set of characters.
     * @returns {Node} - The character grid
     */
    getCharacterGrid = () => {
        if (this.state.loading) {
            return this.getLoadingImage();
        }
        const characterTiles = this.getCharacterTiles();
        return <CharacterGrid characterTiles={characterTiles} />;
    };

    render() {
        return (
            <div>
                <section>
                    {this.getAlphabetMenu()}
                </section>
                <content>
                    {this.getPaginationDetails()}
                    {this.getCharacterGrid()}
                    {this.getPaginationMenu()}
                </content>
            </div>
        );
    }
}

export { CharacterMenu };

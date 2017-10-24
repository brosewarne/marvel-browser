import React, {Component} from "react";
import "./character.css";

import { characterSearch } from "../api";
import { CharacterTile } from "./character_tile";
import { CharacterGrid } from "./character_grid";
import { PaginationMenu } from "../menus/pagination_menu";
import { AlphabetMenu } from "../menus/alphabet_menu";

import loading from "./loading.svg";

class CharacterMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            startsWith: "A",
            characters: [],
            totalCharacters: 0,
            charactersPerPage: 9,
            currentPage: 1
        }
    }

    /**
     * Get the data for the set of characters based on `startsWith`, `currentPage` and `charactersPerPage` and set
     * the character list and total characters to internal state
     */
    getCharacterData = () => {
        const { startsWith, charactersPerPage, currentPage } = this.state;
        const offset = charactersPerPage * (currentPage-1);
        const query = `nameStartsWith=${startsWith}&limit=${charactersPerPage}&offset=${offset}`;
        characterSearch(query, (response) => {
            this.setState({
                loading: false,
                characters: response.data.results,
                totalCharacters: response.data.total
            })
        })
    };

    /**
     * Get the initial set of character data when the page mounts.
     */
    componentWillMount = () => {
        this.setState({ ...this.props.match.params }, this.getCharacterData)
    };

    /**
     * Update the set of character data when the route changes
     * @param nextProps
     */
    componentWillReceiveProps = (nextProps) => {
        this.setState({ ...nextProps.match.params }, this.getCharacterData);
    };

    /**
     * Get the pagination menu for the current set of characters
     * @returns {Node} - The rendered PaginationMenu
     */
    getPaginationMenu = () => {
        const { totalCharacters, charactersPerPage, currentPage, startsWith } = this.state;
        return <PaginationMenu
            totalCharacters={totalCharacters}
            charactersPerPage={charactersPerPage}
            currentPage={currentPage}
            startsWith={startsWith}
        />
    };

    /**
     * Return an alphabet menu for viewing characters that start with each letter of the alphabet
     * @returns {Node} - The rendered AlphabetMenu
     */
    getAlphabetMenu = () => {
        return <AlphabetMenu dispatch={this.props.dispatch} />

    };

    /**
     * Create a set of character tiles for the current set of characters.
     * @returns {Array} - The array of rendered CharacterTiles
     */
    getCharacterTiles = () => {
        return this.state.characters.map((character) => {
            return <CharacterTile character={character} key={`character_tile_${character.id}`}/>
        })
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
                {loading}
            </div>
        )
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
                    {this.getCharacterGrid()}
                    {this.getPaginationMenu()}
                </content>
            </div>
        );
    }
}

export { CharacterMenu };

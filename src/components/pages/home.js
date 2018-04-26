import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

import { randomSearch } from '../../api/api';
import { CharacterPage } from './character_page';
import { ComicPage } from './comic_page';
import { SeriesPage } from './series_page';

// @todo: move this svg and associated css
import loading from '../../loading.svg';
import '../../App.css';

class HomePage extends Component {
    static propTypes = {
        featureType: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            featuredItem: null,
            featureType: props.featureType || this.getFeatureType()
        };

        this.titleMap = {
            characters: 'Character',
            comics: 'Comic',
            series: 'Series'
        };

        this.itemComponents = {
            characters: CharacterPage,
            comics: ComicPage,
            series: SeriesPage
        };
    }

    /**
     * Randomly select a type of item to feature, either characters, comics or series
     * @returns {String} - The type of feature to render
     */
    getFeatureType = () => {
        const features = ['characters', 'comics', 'series'];
        return features[Math.floor(Math.random() * 3)];
    };

    /**
     * Run a 'randomSearch' API call for the selected featureType
     */
    runRandomSearch = () => {
        randomSearch(this.state.featureType).then((response) => {
            this.setState({
                loading: false,
                featuredItem: response.data.results[0]
            });
        });
    };

    /**
     * Run a 'randomSearch' API call for the selected featureType when the page first mounts
     */
    componentWillMount = () => {
        this.runRandomSearch();
    };

    /**
     * Run a 'randomSearch' API call for the selected featureType when the props change
     * @param {Object} nextProps - The incoming set of props
     */
    componentWillReceiveProps = (nextProps) => {
        this.setState({ loading: true, featureType: nextProps.featureType }, () => {
            this.runRandomSearch();
        });
    };

    /**
     * Create a loading Image with text.
     * @returns {Node} - The loading image and text
     */
    getLoadingImage = () => {
        const featureTypeTitle = this.titleMap[this.state.featureType];
        return (
            <div>
                <h1>
                    Loading Random {featureTypeTitle}.....
                </h1>
                <div>
                    <img src={loading} className="loadingSpinner" alt="loading" />
                </div>
            </div>
        );
    };

    /**
     * Create a profile page for the selected fatureItem
     * @returns {Node} - The profile page for the featureItem
     */
    getFeaturedItemProfilePage = () => {
        const ComponentType = this.itemComponents[this.state.featureType];
        return <ComponentType item={this.state.featuredItem} />;
    };

    render() {
        if (this.state.loading) {
            return this.getLoadingImage();
        }
        return (
            <div>
                <Typography variant="headline">
                    Randomly Selected {this.titleMap[this.state.featureType]}
                </Typography>
                {this.getFeaturedItemProfilePage()}
            </div>
        );
    }
}

export { HomePage };

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';

import { ItemMenu } from './components/items/item_menu';
import { CharacterPage } from './components/pages/character_page';
import { ComicPage } from './components/pages/comic_page';
import { SeriesPage } from './components/pages/series_page';
import { HomePage } from './components/pages/home';
import { NotFound } from './components/pages/not_found';
import { Header } from './components/header/header';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/characters/id/:id" component={CharacterPage} />
                    <Route exact path="/comics/id/:id" component={ComicPage} />
                    <Route exact path="/series/id/:id" component={SeriesPage} />
                    <Route exact path="/characters/:startsWith/:currentPage" render={ routeProps => <ItemMenu itemType="characters" params={routeProps.match.params} /> } />
                    <Route exact path="/comics/:startsWith/:currentPage" render={ routeProps => <ItemMenu itemType="comics" params={routeProps.match.params} /> } />
                    <Route exact path="/comics/character/id/:id" render={ routeProps => <ItemMenu itemType="comics" params={routeProps.match.params} /> } />
                    <Route exact path="/series/:startsWith/:currentPage" render={ routeProps => <ItemMenu itemType="series" params={routeProps.match.params} /> } />
                    <Route exact path="/characters/random" render={ () => <HomePage featureType="characters" /> } />
                    <Route exact path="/comics/random" render={ () => <HomePage featureType="comics" /> } />
                    <Route exact path="/series/random" render={ () => <HomePage featureType="series" /> } />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;

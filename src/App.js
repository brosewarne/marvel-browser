import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';

import { CharacterMenu } from './components/characters/character_menu';
import { CharacterPage } from './components/pages/character_page';
import { HomePage } from './components/pages/home';
import { Header } from './components/header/header';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/characters/:startsWith/:currentPage" component={CharacterMenu} />
                    <Route exact path="/characters/random" render={ () => <HomePage featureType="characters" /> } />
                    <Route exact path="/comics/random" render={ () => <HomePage featureType="comics" /> } />
                    <Route exact path="/series/random" render={ () => <HomePage featureType="series" /> } />
                </Switch>
                <Route path="/character/:id" component={CharacterPage} />

            </div>
        );
    }
}

export default App;

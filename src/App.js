import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';

import { CharacterMenu } from './components/characters/character_menu';
import { CharacterPage } from './components/characters/character_page';

import './App.css';

class App extends Component {
    render() {
        const href = '/characters/A/1';
        return (
            <div className="app">
                <header className="appHeader">
                    <Link to={href} href={href}>
                        <h1 className="appTitle">Marvel Character Browser</h1>
                    </Link>
                </header>
                <Switch>
                    <Route exact path="/"><Redirect to="/characters/A/1" /></Route>
                    <Route exact path="/characters/:startsWith/:currentPage" component={CharacterMenu} />
                </Switch>
                <Route path="/character/:id" component={CharacterPage} />

            </div>
        );
    }
}

export default App;

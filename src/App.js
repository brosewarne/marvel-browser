import React, {Component} from "react";
import { Route } from "react-router-dom"
import { Redirect, Switch } from "react-router"

import { CharacterMenu } from "./components/characters/character_menu";
import { CharacterPage } from "./components/characters/character_page";

import "./App.css";

class App extends Component {

    render() {
        return (
            <div className="app">
                <header className="appHeader">
                    <h1 className="appTitle">Marvel Character Browser</h1>
                </header>

                <Switch>
                    <Route exact path="/"><Redirect to="/A/1" /></Route>
                    <Route exact path="/:startsWith/:currentPage" component={CharacterMenu} />
                </Switch>
                <Route path="/character/:id" component={CharacterPage} />

            </div>
        );
    }
}

export default App;

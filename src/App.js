import React, {Component} from "react";
import { Route } from "react-router-dom"
import { Redirect } from "react-router"

import { CharacterMenu } from "./components/characters/character_menu";
import { CharacterPage } from "./components/characters/character_page";

import "./App.css";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Marvel Character Browser</h1>
                </header>
                <Route exact path="/"><Redirect to="/A/1" /></Route>
                <Route path="/:startsWith/:currentPage" component={CharacterMenu} />
                <Route path="/character/:id" component={CharacterPage} />
            </div>
        );
    }
}

export default App;

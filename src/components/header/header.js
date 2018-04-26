import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { HeaderMenu } from './header_menu';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.menuOptions = ['characters', 'comics', 'series'].reduce(
            (allOptions, itemType) => {
                // eslint-disable-next-line no-param-reassign
                allOptions[itemType] = [
                    {
                        name: 'Search'
                    },
                    {
                        name: 'Browse',
                        href: `/${itemType}/A/1`
                    },
                    {
                        name: 'Random',
                        href: `/${itemType}/random`
                    }
                ];
                return allOptions;
            }, {});
    }

    render = () => {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography color="primary" className="appHeader" align="center">
                        <Link to="/" href="/">
                            <h1 className="appTitle">Marvel Browser</h1>
                        </Link>
                    </Typography>
                    <HeaderMenu menuName="Characters" menuOptions={this.menuOptions.characters} />
                    <HeaderMenu menuName="Comics" menuOptions={this.menuOptions.comics} />
                    <HeaderMenu menuName="Series" menuOptions={this.menuOptions.series} />
                </Toolbar>
            </AppBar>
        );
    };
}

export { Header };

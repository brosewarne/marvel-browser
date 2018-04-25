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

        this.menuOptions = {
            characters: [
                {
                    name: 'Search'
                },
                {
                    name: 'Browse',
                    href: '/characters/A/1'
                },
                {
                    name: 'Random',
                    href: '/characters/random'
                }
            ],
            comics: [
                {
                    name: 'Search'
                },
                {
                    name: 'Browse'
                },
                {
                    name: 'Random',
                    href: '/comics/random'
                }
            ],
            series: [
                {
                    name: 'Search'
                },
                {
                    name: 'Browse'
                },
                {
                    name: 'Random',
                    href: '/series/random'
                }
            ]
        };
    }

    render = () => {
        const href = '/characters/A/1';
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="headline" color="primary" className="appHeader" align="center">
                        <Link to={href} href={href}>
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

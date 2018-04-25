import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';

class HeaderMenu extends React.Component {
    static propTypes = {
        menuName: PropTypes.string.isRequired,
        menuOptions: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null
        };

        this.menuItems = this.getMenuItems();
    }

    /**
     * Open the menu when the menu button is clicked
     * @param {Object} event - The click event
     */
    onClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    /**
     * Close the menu when an option is clicked
     */
    onMenuOptionClick = () => {
        this.setState({ anchorEl: null });
    };

    /**
     * Create MenuItem components from this.props.menuOptions
     * @returns {Array} - The array of MenuItem components
     */
    getMenuItems = () => {
        return this.props.menuOptions.map(
            (menuOption) => {
                return (
                    <MenuItem
                        onClick={this.onMenuOptionClick}
                    >
                        <Link
                            href={menuOption.href}
                            to={{ pathname: menuOption.href }}
                        >
                            <Typography variant="subheading" color="primary" align="center">
                                {menuOption.name}
                            </Typography>
                        </Link>
                    </MenuItem>
                );
            }
        );
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <Fragment>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.onClick}
                    color="secondary"
                    variant="raised"
                >
                    {this.props.menuName}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {this.menuItems}
                </Menu>
            </Fragment>
        );
    }
}

export { HeaderMenu };

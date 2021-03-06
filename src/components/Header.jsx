import React, { Fragment, useState } from 'react';
import { AppBar, Button, createMuiTheme, Hidden, IconButton, makeStyles, responsiveFontSizes, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    barCenter: {
        justify: 'center'
    },
    title: {
        flexGrow: 1,
    },
}))

const Header = ({ trigger }) => {

    const classes = useStyles();
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    const [open, setOpen] = useState(false);

    const sections = [
        { title: 'About me', url: 'about' },
        { title: 'Skills', url: 'skills' },
        { title: 'Projects', url: 'projects' },
        { title: 'Contact', url: 'contact' }
    ];

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <Fragment>
            <AppBar
                color={trigger ? "default" : "transparent"}
            // className={classes.toolbar}
            >
                <Toolbar
                    component="nav"
                    variant="dense"
                >
                    {/* {resize ? console.log("sm") : console.log("lg")} */}
                    <Typography
                        color={trigger ? "inherit" : "textSecondary"}
                        variant="h6"
                        noWrap
                        className={classes.title}
                    >
                        Portfolio
                    </Typography>
                    <Hidden smDown implementation="js">
                        {sections.map(section => (
                            <Link
                                key={section.url}
                                activeClass="active"
                                to={section.url}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <Button
                                    color={trigger ? "inherit" : "inherit"}
                                >{section.title}</Button>
                            </Link>
                        ))}
                    </Hidden>
                    <Hidden smUp implementation="js">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                </Toolbar>
            </AppBar>
            <MenuDrawer open={open} setOpen={setOpen} sections={sections} />
        </Fragment>
    );
}

export default Header;
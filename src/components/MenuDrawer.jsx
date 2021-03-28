import React, { Fragment, useRef } from 'react';
import { Drawer, List, ListItem, makeStyles, SwipeableDrawer } from '@material-ui/core';
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        width: 250,
    },
}))

const MenuDrawer = ({ open, setOpen, sections }) => {
    const classes = useStyles();
    const preventDefault = e => e.preventDefault();

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const nodeRef = useRef(null);

    return (
        <Fragment key="right">
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={() => handleDrawerToggle()}
                onOpen={() => handleDrawerToggle()}
                itemRef={nodeRef}
            >
                <div ref={nodeRef} className={classes.list}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={classes.root}
                    >
                        {sections.map(section => (
                            <Link
                                key={section.url}
                                activeClass="active"
                                to={section.url}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                onClick={() => handleDrawerToggle()}
                            >
                                <ListItem button>


                                    {/* <Link
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                > */}
                                    {section.title}
                                </ListItem>
                            </Link>
                        ))}

                    </List>
                </div>
            </SwipeableDrawer>
        </Fragment>
    );
}

export default MenuDrawer;
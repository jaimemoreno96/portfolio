import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    footerSection: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <section id="footer" className={classes.footerSection}>
            <Typography variant="h5" component="h2">Footer</Typography>
        </section>
    );
}

export default Footer;
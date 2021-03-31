import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, faHeart);

const useStyles = makeStyles(theme => ({
    footerSection: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
        textAlign: 'center'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <section id="footer" className={classes.footerSection}>
            <Typography
                variant="h6"
                component="h1"
            >
                Made with <FontAwesomeIcon icon={['fas', "heart"]} size="1x" color="red" /> by Jaime Moreno Puentes
            </Typography>
            <Typography
                variant="body"
                component="p"
            >
                &copy; {new Date().getFullYear()}
            </Typography>
        </section>
    );
}

export default Footer;
import React from 'react';
import { Box, createMuiTheme, Grid, Link, makeStyles, MuiThemeProvider, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faGithub, faLinkedin, faReact);

const useStyles = makeStyles(theme => ({
    aboutBackground: {
        padding: theme.spacing(4),
        backgroundColor: '#000524',
        color: theme.palette.common.white,
    },
    titleAbout: {
        fontWeight: 'bold',
        verticalAlign: 'middle'
    },
    aboutContent: {
        margin: theme.spacing(5),
        // marginTop: 'auto'
    },
    aboutLinks: {
        // color: theme.palette.common.white,
        marginLeft: theme.spacing(2)
    }
}));


const theme = createMuiTheme({
    typography: {
        "fontWeight": 'bolder'
    }
});

const About = ({ dataAbout }) => {
    const classes = useStyles();
    const { title, description, socials } = dataAbout;

    return (
        <section id="about" className={classes.aboutBackground}>
            <Grid container>
                <Grid item md={12} sm={12} lg={6}>
                    <Typography className={classes.titleAbout} variant="h4" component="h1" align="center">
                        {title}
                    </Typography>
                </Grid>
                <Grid item md={12} sm={12} lg={6}>
                    <Typography className={classes.aboutContent} variant="body1" component="p">
                        {description}
                    </Typography>
                    {socials.map(social => (
                        <Link
                            className={classes.aboutLinks}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => console.log(social.name)}
                            href={social.link}
                            key={social.name}
                        >
                            <FontAwesomeIcon icon={['fab', social.name]} size="3x" color="white" />
                        </Link>
                    ))}
                </Grid>
            </Grid>
        </section>
    );
}

export default About;
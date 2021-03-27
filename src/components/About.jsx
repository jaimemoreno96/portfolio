import { Box, createMuiTheme, makeStyles, MuiThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import globe from '../globe.svg'

const useStyles = makeStyles(theme => ({
    aboutBackground: {
        padding: theme.spacing(2),
        backgroundColor: '#000524',
        color: theme.palette.common.white,
    },
    titleAbout: {
        fontWeight: 'bold',
        
        
    }
}));


const theme = createMuiTheme({
    typography: {
        "fontWeight": 'bolder'
    }
});

const About = () => {
    const classes = useStyles();

    return (
        <section id="about" className={classes.aboutBackground}>
            <Typography className={classes.titleAbout} variant="h4" component="h1" align="center">
                About me
            </Typography>
            <Typography variant="body2" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt voluptatem repudiandae distinctio sit neque maxime consectetur minima perspiciatis eaque, a saepe pariatur, tenetur explicabo doloremque? Impedit dolores consectetur iusto!
            </Typography>
            <Typography variant="body1" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt voluptatem repudiandae distinctio sit neque maxime consectetur minima perspiciatis eaque, a saepe pariatur, tenetur explicabo doloremque? Impedit dolores consectetur iusto!
            
            </Typography>
        </section>

    );
}

export default About;
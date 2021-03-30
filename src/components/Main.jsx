import React from 'react';
import { Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import img from '../banner_portfolio.png';
import ParticlesBg from 'particles-bg';
import { KeyboardArrowDown } from '@material-ui/icons';
import { animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    mainBackground: {
        display: 'block',
        position: 'relative',
        height: '100vh',
        weight: '100vw',
        // left: '0',
        verticalAlign: 'middle',
        marginTop: '0',
        padding: theme.spacing(5),
        color: theme.palette.common.white,
        // boxSizing: 'boder-box',
        // backgroundImage: `url(${img})`,
        // backgroundSize: '100%',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // '&::before': {
        //     content: '',
        //     display: 'inline-block',
        //     verticalAlign: 'middle',
        //     heigth: '100%'
        // }
    },
    mainContent: {
        verticalAlign: 'middle',
        // display: 'inline-block',
        // marginTop: theme.spacing(3),
        // marginTop: theme.spacing(9),
        width: '100%',
        // position: 'relative',
        // padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            // marginTop: theme.spacing(9),
            padding: theme.spacing(6),
        },

    },
    boldWeight: {
        fontWeight: 'bold',
    },
    scrollBtn: {
        // marginTop: theme.spacing(1),
        marginTop: theme.spacing(9),
        display: 'block',
        margin: 'auto'
    },
    circles: {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        // backgroundImage: 'url("")',
        // backgroundSize: 'cover',
        // backgroundPosition: '50% 50%',
        // backgroundRepeat: 'no-repeat',
        zIndex: '0'
    }
}));

const Main = ({ dataMain }) => {
    const classes = useStyles();
    const { title, subtitle } = dataMain;

    const scrollToAbout = () => {
        const target = document.querySelector('#header');
        const targetPx = target.getBoundingClientRect().height;
        scroll.scrollTo(targetPx, {
            duration: 500,
            smooth: true,
            offset: -50,
            spy: true
        });
    }


    return (
        <section id="main" className={classes.mainBackground}>
            <ParticlesBg type="circle" bg={true} num="30" />
            <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >
                <div className={classes.mainContent}>
                    <Grid item xl={12} md={12}>
                        <Typography className={classes.boldWeight} align="center" component="h5" variant="h3" color="inherit" gutterBottom>
                            {title}
                        </Typography>
                        <Typography className={classes.boldWeight} align="center" variant="h5" color="inherit" paragraph>
                            {subtitle}
                        </Typography>
                    </Grid>
                    <Grid item xl={12} md={12}>
                        <IconButton
                            color="inherit"
                            aria-label="scroll"
                            onClick={scrollToAbout}
                            className={classes.scrollBtn}
                        >
                            <KeyboardArrowDown fontSize="large" />
                        </IconButton>
                        <Typography className={classes.boldWeight} align="center" variant="body1" color="inherit" paragraph>
                            Scroll
                    </Typography>
                    </Grid>
                </div>
            </Grid>
        </section>
    );
}

export default Main;
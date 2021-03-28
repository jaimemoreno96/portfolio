import React from 'react';
import { Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import img from '../banner_portfolio.png';
import ParticlesBg from 'particles-bg';
import { KeyboardArrowDown } from '@material-ui/icons';
import { animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    mainBackground: {
        // marginTop: theme.spacing(6),
        // position: 'relative',
        // backgroundColor: theme.palette.common.white,
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        // backgroundImage: `url(${img})`,
        // backgroundSize: '100%',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
    },
    mainContent: {
        marginTop: theme.spacing(3),
        position: 'relative',
        padding: theme.spacing(3),
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(9),
            paddingRight: 0
        },

    },
    boldWeight: {
        fontWeight: 'bold',
    },
    scrollBtn: {
        // marginTop: theme.spacing(1),
        display: 'block',
        margin: 'auto'
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

            <Grid container justify="center">
                <ParticlesBg type="circle" bg={true} />
                <Grid item xl={12} md={12}>
                    <div className={classes.mainContent}>
                        <Typography className={classes.boldWeight} align="center" component="h5" variant="h3" color="inherit" gutterBottom>
                            {title}
                        </Typography>
                        <Typography className={classes.boldWeight} align="center" variant="h5" color="inherit" paragraph>
                            {subtitle}
                        </Typography>
                    </div>
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
            </Grid>
        </section>

    );
}

export default Main;
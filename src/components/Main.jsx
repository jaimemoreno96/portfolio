import React from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import img from '../banner_portfolio.png';
import ParticlesBg from 'particles-bg';

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
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(9),
            paddingRight: 0
        },

    },
    boldWeight: {
        fontWeight: 'bold',
    }
}));

const Main = () => {
    const classes = useStyles();

    return (
        <section id="main" className={classes.mainBackground}>
            
            <Grid container justify="center">
            <ParticlesBg type="circle" bg={true} />
                <Grid item xl={12} md={6}>
                    <div className={classes.mainContent}>
                        <Typography className={classes.boldWeight} align="center" component="h5" variant="h3" color="inherit" gutterBottom>
                            Jaime Moreno Puentes
                            </Typography>
                        <Typography className={classes.boldWeight} align="center" variant="h5" color="inherit" paragraph>
                            Software Developer
                            </Typography>
                    </div>
                </Grid>
            </Grid>
        </section>

    );
}

export default Main;
import React from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import img from '../banner_portfolio.png';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(7)
    },
    mainBackground: {
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    mainContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(9),
            paddingRight: 0,
        },
    }
}));

const Main = () => {
    const classes = useStyles();

    return (
        <section id="main" className={classes.main}>
            <Paper className={classes.mainB} style={{ backgroundImage: `url(${img})` }}>
                {<img style={{ display: 'none' }} src={img} alt="img" />}
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                Jaime Moreno Puentes
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                Software Developer
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </section>

    );
}

export default Main;
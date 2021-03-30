import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import ParticlesBg from 'particles-bg';

const useStyles = makeStyles(theme => ({
    titleProject: {
        fontWeight: 'bold',
        verticalAlign: 'middle'
    },
    projectSection: {
        padding: theme.spacing(2),
        backgroundColor: '#000524',
        color: theme.palette.common.white,
    },
    aboutContent: {
        margin: theme.spacing(5),
        // marginTop: 'auto'
    },
}));

const Projects = () => {
    const classes = useStyles();

    return (
        <section id="projects" className={classes.projectSection}>
            <Typography variant="h5" component="h2">Projects</Typography>
            <Typography variant="body1" component="p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque praesentium illum eum exercitationem non fugiat reiciendis nesciunt, eaque nostrum perspiciatis beatae voluptatem dolorem provident. Ullam odit quod ut quaerat voluptatum.
            </Typography>
            <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id nulla officia voluptate dicta aperiam exercitationem accusantium, accusamus doloribus omnis quidem corporis ad esse modi earum deleniti, dolor consectetur consequuntur!
            </Typography>
        </section>
    );
}

export default Projects;
import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    skillSection: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    }
}));

const Skills = () => {
    const classes = useStyles();

    return (
        <section id="skills" className={classes.skillSection}>
            <Typography variant="h5" component="h2">Skills</Typography>

            <Typography variant="body1" component="p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque praesentium illum eum exercitationem non fugiat reiciendis nesciunt, eaque nostrum perspiciatis beatae voluptatem dolorem provident. Ullam odit quod ut quaerat voluptatum.
            </Typography>

            <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id nulla officia voluptate dicta aperiam exercitationem accusantium, accusamus doloribus omnis quidem corporis ad esse modi earum deleniti, dolor consectetur consequuntur!
            </Typography>
        </section>
    );
}

export default Skills;
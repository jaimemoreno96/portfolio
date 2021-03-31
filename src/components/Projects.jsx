import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import ParticlesBg from 'particles-bg';
import { projectsImages } from './SkillImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubSquare, faReact } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faGithubSquare, faReact);

const useStyles = makeStyles(theme => ({
    titleProject: {
        fontWeight: 'bold',
        verticalAlign: 'middle',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    projectSection: {
        padding: theme.spacing(2),
        backgroundColor: '#000524',
        color: theme.palette.common.white,
    },
    projectContent: {
        padding: theme.spacing(2),
        // marginTop: 'auto'
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    projectsLinks: {
        // color: theme.palette.common.white,
        marginLeft: theme.spacing(2)
    }
}));

const Projects = ({ projectsData }) => {
    const { projects } = projectsData;
    const classes = useStyles();

    return (
        <section id="projects" className={classes.projectSection}>
            <Typography
                variant="h4"
                component="h1"
                className={classes.titleProject}
                align="center"
            >
                Projects
            </Typography>
            <Grid container className={classes.projectContent}>
                {projects.map(project => (
                    <Grid item lg={4} md={6} sm={12} key={project.name}>
                        <Card className={classes.root}>
                            <CardHeader
                                title={project.name}
                            />
                            <CardMedia
                                className={classes.media}
                                image={projectsImages[project.img]}
                                title={project.name}
                            />
                            <CardActions>
                                <Link
                                    className={classes.projectsLinks}
                                    target="_blank"
                                    rel="noreferrer"
                                    href={project.link}
                                    key={project.name}
                                >
                                    <FontAwesomeIcon icon={['fab', 'github-square']} size="3x" color="black" />
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}

export default Projects;
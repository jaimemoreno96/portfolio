import React from 'react'
import { Box, Grid, GridList, GridListTile, GridListTileBar, makeStyles, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import images from './SkillImages';

const useStyles = makeStyles(theme => ({
    skillSection: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    titleSkills: {
        fontWeight: 'bold',
        verticalAlign: 'middle',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    skillsImage: {
        width: '100%',
        height: 'auto',
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)'
        padding: theme.spacing(1),
        maxWidth: '150px',
        // verticalAlign: 'middle',
    },
    divImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
    },
    skillImageSection: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.common.white,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.common.white,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const Skills = ({ skillsData }) => {
    const classes = useStyles();
    const { languages, frameworks, tools } = skillsData;

    return (
        <section id="skills" className={classes.skillSection}>
            <Typography
                variant="h4"
                component="h1"
                className={classes.titleSkills}
                align="center"
            >
                Skills
                </Typography>
            <Typography
                variant="h5"
                component="h2"
                className={classes.titleSkills}
                align="center"
            >
                Programming languages
                </Typography>
            <Grid container>
                {languages.map(language => (
                    <Grid item sm={6} md={6} lg={3} key={language} align="center">
                        <div className={classes.divImage}>
                            <img className={classes.skillsImage} src={images[language]} alt={`${language}-logo`} />
                        </div>
                    </Grid>
                ))}
            </Grid>

            <Typography
                variant="h5"
                component="h2"
                className={classes.titleSkills}
                align="center"
            >
                Frameworks and libraries
                </Typography>
            <Grid container>
                {frameworks.map(framework => (
                    <Grid item sm={6} md={6} lg={4} key={framework} align="center">
                        <img className={classes.skillsImage} src={images[framework]} alt={`${framework}-logo`} />
                    </Grid>
                ))}
            </Grid>
            <Typography
                variant="h5"
                component="h2"
                className={classes.titleSkills}
                align="center"
            >
                Tools
                </Typography>
            <Grid container>
                {tools.map(tool => (
                    <Grid item sm={6} md={6} lg={4} key={tool} align="center">
                        <img className={classes.skillsImage} src={images[tool]} alt={`${tool}-logo`} />
                    </Grid>
                ))}
            </Grid>
        </section >
    );
}

export default Skills;
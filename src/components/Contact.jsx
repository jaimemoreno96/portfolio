import React from 'react';
import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faGithub, faLinkedin);

const useStyles = makeStyles(theme => ({
    titleContact: {
        fontWeight: 'bold',
        verticalAlign: 'middle',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    contactSection: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    contactContent: {
        margin: theme.spacing(5),
        // marginTop: 'auto'
    },
}));

const Contact = ({ contactData }) => {
    const classes = useStyles();
    const { contacts } = contactData;
    return (
        <section id="contact" className={classes.contactSection}>
            <Typography
                variant="h4"
                component="h1"
                className={classes.titleContact}
                align="center"
            >
                Contact me
                </Typography>
            <Grid container justify="center">
                {contacts.map(contact => (
                    <Grid item lg={3} md={6} sm={6} xs={6} key={contact.name}>
                        <Link
                            target="_blank"
                            rel="noreferrer"
                            href={contact.link}
                        >
                            <FontAwesomeIcon style={{ textAlign: 'center' }} icon={['fab', contact.name]} size="5x" color={contact.color} />
                        </Link>
                        {/* <Typography
                                variant="h5"
                                component="h2"
                                className={classes.titleContact}
                                align="inherit"
                                style={{ marginTop: '12%', marginLeft: '1rem' }}
                            >
                                {contact.realName}
                            </Typography> */}

                    </Grid>
                ))}
            </Grid>

        </section>
    );
}

export default Contact;


import { Fab, makeStyles, useScrollTrigger } from '@material-ui/core';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import About from './About';
import BackToTop from './BackToTop';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Projects from './Projects';
import Skills from './Skills';

const useStyles = makeStyles((theme) => ({
    main: {
        paddingBottom: theme.spacing(2),

    },
}))

const Portfolio = () => {
    const nodeRef = useRef(null);
    const classes = useStyles();
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleScroll = () => {
        const target = document.querySelector('#header');
        if (window.scrollY >= target.getBoundingClientRect().height) {
            setTrigger(true);
            return;
        }
        setTrigger(false);
    }


    return (
        <Fragment>
            <main>
                <div id="header">
                    <Header trigger={trigger} />
                    <Main />
                </div>
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
                <BackToTop>
                    <Fab ref={nodeRef} color="default" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </BackToTop>
            </main>
        </Fragment>
    );
}

export default Portfolio;
import { Container, Fab } from '@material-ui/core';
import React, { Fragment, useRef } from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import About from './About';
import BackToTop from './BackToTop';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Projects from './Projects';
import Skills from './Skills';

const Portfolio = () => {
    const nodeRef = useRef(null);

    return (
        <Fragment>
            <Container maxWidth="xl">
                <Header />
                <Main />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </Container>
            <BackToTop>
                <Fab ref={nodeRef} color="default" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </BackToTop>
        </Fragment>
    );
}

export default Portfolio;
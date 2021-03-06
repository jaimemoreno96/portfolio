import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Fab } from '@material-ui/core';
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
    const dataMain = {
        title: 'Jaime Moreno Puentes',
        subtitle: 'Frontend Developer'
    }

    const contactData = {
        contacts: [
            {
                name: 'github',
                realName: 'Github',
                link: 'https://github.com/jaimemoreno96',
                color: 'black'
            },
            {
                name: 'linkedin',
                realName: 'Linkedin',
                link: 'https://www.linkedin.com/in/jaime-moreno-581b031b5/',
                color: 'royalblue'
            }
        ],
    }

    const dataAbout = {
        title: 'About me',
        description: "Hello i´m Jaime a frontend developer with two years of experience in web development, and also i have knowledge on backend and Android development (Native), i´m very interested in programming and new technologies.",
        socials: [...contactData.contacts]
    };

    const skillsData = {
        languages: ['javascript', 'php', 'kotlin', 'java'],
        frameworks: ['reactjs', 'angular', 'nodejs'],
        tools: ['git', 'github', 'firebase']
    }

    const projectsData = {
        projects: [
            {
                name: 'Porfolio',
                technologies: [
                    {
                        name: 'react',
                        color: 'dodgerblue'
                    },
                    // {
                    //     name: 'node',
                    //     color: 'black'
                    // }
                ],
                link: 'https://github.com/jaimemoreno96/portfolio',
                img: 'portfolio'

            },
        ]
    }

    const nodeRef = useRef(null);
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
                    <Main dataMain={dataMain} />
                </div>
                <About dataAbout={dataAbout} />
                <Skills skillsData={skillsData} />
                <Projects projectsData={projectsData} />
                <Contact contactData={contactData} />
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
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './header.scss'; 

const Header = () => {
    const location = useLocation();

    if (location.pathname === '/projects') {
        return (
            <NavLink exact to='/' className='projects-header home-link'>
                <div className="home-button">
                    Back
                </div>
            </NavLink>
        );
    }

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            smooth: 'easeInOutQuad'
        });
    };

    const scrollToTopFast = () => {
        scroll.scrollToTop({
            duration: 0
        });
    };

    const scrollToAbout = () => {
        scroll.scrollTo('aboutSection', {
          duration: 800,
          smooth: 'easeInOutQuad',
        });
      };

      const scrollToContact = () => {
        scroll.scrollTo('contactSection', {
          duration: 800,
          smooth: 'easeInOutQuad',
        });
      };


    return (
        <div className="header-container">
            <div className="brand">
                <ScrollLink to="homeSection" smooth={true} duration={800}>
                    <div className='title' onClick={scrollToTop}>Connor O'Doherty</div>
                </ScrollLink>
            </div>
            <nav>
                <NavLink exact="true" activeClassname='active' className='projects-link' onClick={scrollToTopFast} to='/projects'>
                    projects
                </NavLink>
                <ScrollLink
                    className='about-link'
                    to="aboutSection"
                    smooth={true}
                    duration={800}
                    onClick={scrollToAbout}
                    activeClass="active"
                    spy={true}
                    offset={-115}
                    >about
                </ScrollLink>
                <ScrollLink
                    className='contact-link'
                    to="contactSection"
                    smooth={true}
                    duration={800}
                    onClick={scrollToContact}
                    activeClass="active"
                    spy={true}
                    offset={-115}
                    >contact
                    </ScrollLink>
            </nav>
        </div>
    );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './header.scss'; 

const Header = () => {

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
                    <div className='title'>Connor O'Doherty</div>
                </ScrollLink>
            </div>
            <nav>
                <NavLink exact="true" activeclassname='active' className='projects-link' to='/projects'>
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
                    offset={-100}
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
                    offset={-100}
                    >contact
                    </ScrollLink>
            </nav>
        </div>
    );
};

export default Header;

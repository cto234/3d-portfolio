import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss'; // Import your CSS file for styling

const Header = () => {
    return (
        <div className="header-container">
            <div className="brand">
                <Link className='title' to={'/'}>
                    Connor O'Doherty
                </Link>
            </div>
            <nav>
                <NavLink exact="true" activeclassname='active' className='projects-link' to='/projects'>
                    projects
                </NavLink>
                <NavLink exact="true" activeclassname='active' className='about-link' to='/about'>
                    about
                </NavLink>
                <NavLink exact="true" activeclassname='active' className='contact-link' to='/contact'>
                    contact
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;

import './projects.scss'
import travelTimeImage from '../../images/travel-time.png'
import photoFolderImage from '../../images/photo-folder.png'
import connorsClothesImage from '../../images/connors-clothes.png'
import bookReviewsImage from '../../images/bookReviews.png'
import blackjackImage from '../../images/blackjack.png'
import budgetImage from '../../images/budget.png'
import holidaysImage from '../../images/holidays.png'


const ProjectItem = ({ name, description, link, builtWith, imageUrl }) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <li className="project-item" onClick={handleClick}>
            <div className="project-overlay">
                <p id='project-name'>{name}</p>
                <p className='project-description'>{description}</p>
                <p className='built-with'>Built using: {builtWith}</p>
            </div>
            <img className="project-image" src={imageUrl} alt={name} />
        </li>
    );
};


const Projects = () => {
    const projects = [
        {
            name: 'Travel Time',
            description: 'An interactive tool that determines how long different entities would take to travel between two points on a map',
            link: 'https://cto234.github.io/travel-time/',
            builtWith: 'React, Google Maps API, Chakra UI',
            imageUrl: travelTimeImage,
        },
        {
            name: 'Holidays in United States',
            description: 'A site for my band. Includes links to our music, videos, and info about upcoming and past shows',
            link: 'https://cto234.github.io/holidays-in-united-states/',
            builtWith: 'React, Tailwind',
            imageUrl: holidaysImage,
        },
        {
            name: 'Budget',
            description: 'An app for visualizing incomes and expenses to help users save money',
            link: 'https://cto234.github.io/budget/',
            builtWith: 'React, Tailwind',
            imageUrl: budgetImage,
        },
        {
            name: 'Photo Folder',
            description: 'A web app for organizing and storing images that you find on the web',
            link: 'https://github.com/cto234/photo-folder',
            builtWith: 'Node.js, MongoDB Atlas, Bcrypt, Handlebars ',
            imageUrl: photoFolderImage,
        },
        {
            name: 'Connor\'s Clothes',
            description: 'A mock ecommerce site for selling my clothes',
            link: 'https://cto234.github.io/connors-clothes/',
            builtWith: 'React, Sass',
            imageUrl: connorsClothesImage,
        },
        {
            name: 'Book Reviews',
            description: 'A simple web app for me to post reviews and ratings for the books I read',
            link: 'https://cto234.github.io/book-reviews/',
            builtWith: 'React',
            imageUrl: bookReviewsImage,
        },
        {
            name: 'Blackjack',
            description: 'A minimalist game of blackjack',
            link: 'https://github.com/cto234/blackjack',
            builtWith: 'Javascript',
            imageUrl: blackjackImage,
        },
    ];

    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <ul className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </ul>
        </div>
    );
};

export default Projects;
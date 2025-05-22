import './projects.scss'
import travelTimeImage from '../../images/travel-time.png'
import photoFolderImage from '../../images/photo-folder.png'
import connorsClothesImage from '../../images/connors-clothes.png'
import bookReviewsImage from '../../images/bookReviews.png'
import blackjackImage from '../../images/blackjack.png'
import budgetImage from '../../images/budget.png'
import holidaysImage from '../../images/holidays.png'
import holidaysWordpress from '../../images/holidays-wordpress.png'
import outOfFive from '../../images/out-of-five.png'


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
            description: 'An interactive tool that determines how long different entities would take to travel between two points on a map using real-world locations and distances through the Google Maps API',
            link: 'https://cto234.github.io/travel-time/',
            builtWith: 'React, Google Maps API, Chakra UI',
            imageUrl: travelTimeImage,
        },
        {
            name: 'Holidays in United States 2',
            description: 'A second take on a site for my band, this one designed and built on Wordpress with a focus on modern web design aesthetics',
            link: 'https://holidaysinunitedstatesband.wordpress.com',
            builtWith: 'Wordpress',
            imageUrl: holidaysWordpress,
        },
        {
            name: 'Out of Five',
            description: 'A more refined take on the review site. Dynamically loads albums from a playlist using the Spotify API to a custom local server.',
            link: 'https://github.com/cto234/album-project',
            builtWith: 'React, Tailwind, Spotify API',
            imageUrl: outOfFive,
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
            description: 'An app for visualizing incomes and expenses to help users save money. Generates custom charts for data visualization ',
            link: 'https://cto234.github.io/budget/',
            builtWith: 'React, Tailwind, MUI X-Charts',
            imageUrl: budgetImage,
        },
        {
            name: 'Photo Folder',
            description: 'A web app for organizing and storing images that you find on the web. Features user authentication and automatically stores users\' collections to MongoDB',
            link: 'https://github.com/cto234/photo-folder',
            builtWith: 'Node.js, MongoDB Atlas, Bcrypt, Handlebars ',
            imageUrl: photoFolderImage,
        },
        {
            name: 'Connor\'s Clothes',
            description: 'A mock ecommerce site for selling my clothes. Features product sorting by size and price, shopping cart, and checkout functionality',
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
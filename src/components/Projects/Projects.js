import './projects.scss'
import travelTimeImage from '../../images/travel-time.png'
import photoFolderImage from '../../images/photo-folder.png'
import connorsClothesImage from '../../images/connors-clothes.png'
import bookReviewsImage from '../../images/bookReviews.png'
import blackjackImage from '../../images/blackjack.png'


const ProjectItem = ({ name, description, repoLink, imageUrl }) => {
    const handleClick = () => {
        window.open(repoLink, '_blank');
    };

    return (
        <li className="project-item" onClick={handleClick}>
            <div className="project-overlay">
                <h2>{name}</h2>
                <p>{description}</p>
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
            repoLink: 'https://github.com/cto234/travel-time',
            imageUrl: travelTimeImage,
        },
        {
            name: 'Photo Folder',
            description: 'A web app for organizing and storing images that you find on the web',
            repoLink: 'https://github.com/cto234/photo-folder',
            imageUrl: photoFolderImage,
        },
        {
            name: 'Connor\'s Clothes',
            description: 'A mock ecommerce site for selling my clothes',
            repoLink: 'https://github.com/cto234/connors-clothes',
            imageUrl: connorsClothesImage,
        },
        {
            name: 'Book Reviews',
            description: 'A simple web app for me to post reviews and ratings for the books I read',
            repoLink: 'https://github.com/cto234/book-reviews',
            imageUrl: bookReviewsImage,
        },
        {
            name: 'Blackjack',
            description: 'A minimalist game of blackjack',
            repoLink: 'https://github.com/cto234/blackjack',
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
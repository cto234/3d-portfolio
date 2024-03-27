import './about.scss';

const About = ({id}) => {
      
    return(
        <div id={id} className='about-container'>
            <h1 className='about-title'>About</h1>
            <p className='line line1'>
                My name is Connor O'Doherty
            </p>
            <p className='line line2'>
                I am a Brooklyn-based web designer and frontend developer 
            </p>
            <p className='line line3'>
                In 2023 I graduated from New York University's College of Arts and Sciences with a bachelor's degree in computer science
            </p>
            <p className='line line4'>
                I enjoy making sleek and functional websites
            </p>
            <p className='line line5'>
               I believe that function and design go hand in hand, and that each concept can compliment the other when employed properly
            </p>
            <p className='line line6'>
                My aim is to create projects that are simultaneously aesthetically pleasing and intuitive to the user
            </p>
            <p className='line line7'>
                I am looking to join a team of developers to contribute and learn alongside an experienced group of talented people
            </p>
            <p className='line line8'>
                Please take a look at my projects page and feel free to contact me using the links below
            </p>
        </div>
    )
}

export default About;
import './about.scss';

const About = ({id}) => {

    return(
        <div id={id} className='about-container'>
            <h1 className='about-title'>about</h1>
            <p className='p1'>
                My name is Connor O'Doherty.
            </p>
        </div>
    )
}

export default About;
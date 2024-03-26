import './contact.scss';

const Contact = ({id}) => {
    return(
        <div id={id} className='contact-container'>
            <h1 className='contact-title'>Contact</h1>
            <div className='link-container'>
                <a className='email-link' href="mailto:connor.t.odoherty@gmail.com">email</a>
                <a className='linkedin-link' href="https://www.linkedin.com/in/connor-o-doherty-503249235/">linkedin</a>
                <a className='github-link' href='https://github.com/cto234'>github</a>
            </div>
        </div>
    )
}

export default Contact;

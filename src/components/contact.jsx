import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="contact" id='contact'>
            <img src={require('./images/stars.png')} alt="stars" id='stars'/>
            <ul>
            <li>
                <a href='https://github.com/JavierGarna'><FontAwesomeIcon size='2x' icon={faGithub}/></a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/javier-garcia-navarro-ba8605244/'><FontAwesomeIcon size='2x' icon={faLinkedin}/></a>
            </li>
            <li>
                <button onClick={() => navigator.clipboard.writeText('javiergarna.2107@gmail.com')}><FontAwesomeIcon size='2x' icon={faEnvelope}/></button>
            </li>
            <li>
                <button onClick={() =>  navigator.clipboard.writeText('07851466995')}><FontAwesomeIcon size='2x' icon={faPhone}/></button>
            </li>
            </ul>
        </div>
    )
};

export default Contact;
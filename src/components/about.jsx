const About = () => {
    return (
        <div className="about" id='about'>
            <img src={require('./images/me.png')} alt="me" id='me'/>
            <div className="info">
                <h2>A BIT ABOUT ME</h2>
                <p>I am a software developer originally from Spain based in Preston, Lancashire. I design and build websites and applications that work seamlessly in all devices.  </p>
            </div>
            <img src={require('./images/stars.png')} alt="stars" id='stars'/>
        </div>
    )
};

export default About;
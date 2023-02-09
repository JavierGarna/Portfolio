import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        let moon = document.getElementById('moon');
        let planet = document.getElementById('planet');
        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            moon.style.left = 65 + value * 0.15 + '%';
            planet.style.left = -5 - value * 0.15 + '%';
        })
    }, []);

    return (
        <section id='home'>
                <img src={require('./images/stars.png')} alt="stars" id='stars'/>
                <img src={require('./images/planet.png')} alt="planet" id='planet'/>
                <img src={require('./images/moon.png')} alt="moon" id='moon'/>
                <a href="#about" id="btn">Explore</a>
        </section>
    )
};

export default Home;
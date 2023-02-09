const Header = () => {
    return (
        <>
            <header className="header" id='header'>
                <img src={require('./images/logo.png')} alt="logo" className="logo"/>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header;
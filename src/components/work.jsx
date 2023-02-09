import { useState } from "react";

const Work = () => {
    const projectList = [{
        title : "BackEnd NC-Games",
        description : "an API that accesses a board games data programmatically. The intention is to mimic the building of a real world backend service which should provide this information to the front end architecture.",
        img : "be games.png"
    }, 
    {
        title : "FrontEnd NC-Games",
        description : "a board game review app that uses the data from BackEnd NC-Games. You can see reviews about board games of every category, vote your favourite reviews and leave a comment on them.",
        img : "fe games.png"
    }, 
    {
        title : "Dooduels",
        description : "a drawing and guessing game with an AR twist. Sign up and create or join a game to test your drawing skills. Personalise your profile, add your friends and use your camera to draw in real-time.",
        img : "dooduels.png"
    }];
    const [description, setDescription] = useState(projectList[0].description);
    const [img, setImg] = useState("be games.png");
    const [title, setTitle] = useState(projectList[0].title)


    return (
        <div className="work" id="work">
            <div className="list">
            <ul>
                {projectList.map((project) => {
                    return (
                        <div>
                            <li><button onClick={() => setDescription(project.description) || setImg(project.img) || setTitle(project.title)}>{project.title}</button></li>
                        </div>
                    )
                })}
            </ul>
            <div className="body">
                <div className="proj">
                    <p id="title">{title}</p>
                    <p id="description">{description}</p>
                </div>
                <img src={require(`./images/${img}`)} alt="project showcase"/>
                </div>
            </div>
            <img src={require('./images/stars.png')} alt="stars" id='stars'/>
        </div>
    )
};

export default Work;
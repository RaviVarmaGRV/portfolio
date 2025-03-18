import { useState } from "react";
import AllProjectsNavBar from "./AllProjectsNavBar";
import ProjectWithImg from "./ProjectWithImg";

function AllProjects({myProjects}) {
    const [languageSelected, setLanguage] = useState(0);

    var projects= [
        [{title:"Rock Paper Scissors",img:"rockPaperScissors1",link:"https://rpsgame-uvqn.onrender.com/"},
        {title:"Solar System",img:"solarFamily",link:"https://solarfamily-1.onrender.com/"}],

        [{title:"Type Writer",img:"typeWriterJS",link:"https://ravig-0159-8443.zcodeusers.in/assignment25js/type.html"},
        {title:"Tip Calculator",img:"tipCalculatorJS",link:"http://127.0.0.1:5500/assignment24js/assign24.html"},
        {title:"Music Player",img:"musicJS",link:"https://ravig-0159-8443.zcodeusers.in/assignment28js/music.html"}],
    
        [{title:"Cuberto website page",img:"cubertoHTML",link:"https://cubertosite.netlify.app/"},
        {title:"Cascade website page",img:"cascadeHTML",link:"https://cascadepage.netlify.app/"},
        {title:"Vortex website page",img:"vortexHTML",link:"https://vortexpage.netlify.app/"}],

        [{title:"Tennis Clash",img:"tennisScratch",link:"https://scratch.mit.edu/projects/1041086821/"},
        {title:"House drawing",img:"houseScratch",link:"https://scratch.mit.edu/projects/1037903862/"},
        {title:"Name animation",img:"nameScratch",link:"https://scratch.mit.edu/projects/1039337181/"}],
    ];
    return(
        <div className="allProjects" ref={myProjects}>    
            <AllProjectsNavBar languageSelected={languageSelected} setLanguage={setLanguage}/> 
            
            <div className="projects">
                {projects[languageSelected].map((lan)=><ProjectWithImg title={lan.title} bgImg={lan.img} link={lan.link}/>)}
                
            </div>  
        </div>
    )
}

export default AllProjects
import { useState } from "react";
import { FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa6";

function BestFive({myBest}) {

    var [projectSelected, setSelectedProject]= useState(0);

    var bestFiveProjects = [
        {title:'Reversi',description:'It is a two player game, one with max points atlast will win. The game may also end if one run out of chances to place their coin.',languages:'Html Css and Javascript',img:'reversi.png',link:'https://ravig-0159-8443.zcodeusers.in/justABeganing/home.html'},
        {title:'Vehicle Identification System',description:'In this app user can register their vehicles, Admins can search throught the vehicles.',languages:'Java',img:'vehicleIdentification.png', link:"https://github.com/RaviVarmaGRV/javaProject"},
        {title:'UnarvAI',description:"UnarvAI detects your mood by analyzing facial expressions and give suggestions based on you mood.",languages:'React, Node, fave-api model',img:'unarvaiPage.png',link:""}
    ]

    var selectedProject=bestFiveProjects[projectSelected];

    return(
        <div className="topPicks" ref={myBest}>
            <div className="bestFiveDiv">
                <div className="divsInBestFive">
                    <p className="projectNum">{'0'+(projectSelected+1)}<span className="five">{'/0'+(bestFiveProjects.length)}</span></p>
                    <p className="projectTitle">{selectedProject.title}</p>
                    <p className="lineHeight">{selectedProject.description}</p>
                    <p className="usedLang">{selectedProject.languages}</p>
                    <a href={selectedProject.link} target="_blank" className="mainProject">
                        <div className="arrowIcon">
                            <FaArrowRight />
                        </div>
                    </a>
                    
                    
                    
                </div>
                <div className="divsInBestFive">
                    <img src={selectedProject.img} height={'400px'} width={'550px'} alt="" className="projectImg"/>
                    <div className="dragIcons">
                        <div className="changeProjectIcons moveLeft" onClick={()=>setSelectedProject((projectSelected!=0) ? projectSelected-1:bestFiveProjects.length-1)}>
                            <FaChevronLeft />
                        </div>
                        <div className="changeProjectIcons moveRight"  onClick={()=>setSelectedProject((projectSelected!=(bestFiveProjects.length-1)) ? projectSelected+1:0)}>
                            <FaChevronRight />
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>

    )
}

export default BestFive;
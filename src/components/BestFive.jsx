import { useState } from "react";
import { FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa6";

function BestFive({myBest}) {

    var [projectSelected, setSelectedProject]= useState(0);

    var bestFiveProjects = [
        {title:'Reversi',description:"It's a two-player game; the player with the most points wins, the game ends if a player runs out of moves.",languages:'Html Css and Javascript',img:'reversi.png',link:'https://ravig-0159-8443.zcodeusers.in/justABeganing/home.html'},
        {title:'Vehicle Identification System',description:'In this app, users can register their vehicles, and admins can search through them.',languages:'Java',img:'vehicleIdentification.png', link:"https://github.com/RaviVarmaGRV/javaProject"},
        {title:'UnarvAI',description:"UnarvAI detects your mood by analyzing facial expressions and provides suggestions based on your mood.",languages:'React, Node and fave-api model',img:'unarvaiPage.png',link:""}
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
                        <button className="changeProjectIcons moveLeft" onClick={()=>setSelectedProject((projectSelected!=0) ? projectSelected-1:bestFiveProjects.length-1)}>
                            <FaChevronLeft />
                        </button>
                        <button className="changeProjectIcons moveRight"  onClick={()=>setSelectedProject((projectSelected!=(bestFiveProjects.length-1)) ? projectSelected+1:0)}>
                            <FaChevronRight />
                        </button>
                    </div>
                
                </div>
            </div>
            
        </div>

    )
}

export default BestFive;
import TechnologyIcon from "./TechnologyIcon";

function SkillsPage({mySkills}) {
    return(
        <div className="skillsPage" ref={mySkills}>
            <p>The <span className="txtGradientClr">technologies</span> I learnt so far,</p>
            <div className="technologies">
                <TechnologyIcon icon={'react'}/>
                <TechnologyIcon icon={'node'}/>
                <TechnologyIcon icon={'javaScript'}/>
                <TechnologyIcon icon={'java'}/>
                <TechnologyIcon icon={'mySql'}/>
                <TechnologyIcon icon={'html'}/>
                <TechnologyIcon icon={'css'}/>
                
            </div>
            <p>I hope it will keep <span className="txtGradientClr">extending...</span></p>
        </div>
    )
}

export default SkillsPage;
import TechnologyIcon from "./TechnologyIcon";

function SkillsPage({mySkills}) {
    return(
        <div className="skillsPage" ref={mySkills}>
            <p>The <span className="txtGradientClr">technologies</span> I learnt yet,</p>
            <div className="technologies">
                <TechnologyIcon icon={'react'}/>
                <TechnologyIcon icon={'node'}/>
                <TechnologyIcon icon={'html'}/>
                <TechnologyIcon icon={'css'}/>
                <TechnologyIcon icon={'javaScript'}/>
                <TechnologyIcon icon={'java'}/>
                <TechnologyIcon icon={'mySql'}/>
            </div>
            <p>I hope it will keep <span className="txtGradientClr">extends...</span></p>
        </div>
    )
}

export default SkillsPage;
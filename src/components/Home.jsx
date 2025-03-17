import Header from "./Header";
import SingleAchievement from "./SingleAchievement";

function Home({home, mySkills, myBest, myProjects}) {
    return(
       
        <div className="homePage" ref={home}>
            <Header home={home} mySkills={mySkills} myBest={myBest} myProjects={myProjects} ></Header>
            <div className="homeMain">
                <div className="homeMainLeft">
                    <p className="role">Software Developer</p>
                    <h1 className="iAm">Hello I'm <br /> <span className="bigName">Ravi Varma</span> </h1>
                    <div className="descDiv">
                        <p className="description">I am excel at crafting elegant appearance.</p>
                        <p className="description">I am proficient as a team player and can also lead.</p>
                    </div>                
                </div>
                <div className="homeMainRight">
                    {/* <div className="gradient">
                        <img src="virat.png" className="viratImg" alt="" />
                    </div> */}
                    <div className="imgHolder">
                        <img src="profilePic.jpg" alt="" className="picture"/>
                    </div>
                </div>
            </div>
            <div className="myAchievements">
                <SingleAchievement num = {24} str = {'Project Completed'} />
                <SingleAchievement num = {77} str = {'Contribution in GitHub'} />
                <SingleAchievement num = {7} str = {'Technologies Mastered'} />
                <SingleAchievement num = {1} str = {'Team projects'} />
            </div>
        </div>



    )
}

export default Home;
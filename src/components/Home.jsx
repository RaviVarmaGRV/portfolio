import Header from "./Header";
import SingleAchievement from "./SingleAchievement";

function Home({home, mySkills, myBest, myProjects}) {
    return(
       
        <div className="homePage" ref={home}>
            <Header home={home} mySkills={mySkills} myBest={myBest} myProjects={myProjects} ></Header>
            <div className="homeMain">
                {/* <div className="homeLeft"> */}
                    <div className="homeMainLeft">
                        <p className="role">Front-end Trainee</p>
                        <h1 className="iAm">Hello I'm <br /> <span className="bigName">Ravi Varma</span> </h1>
                        <div className="descDiv">
                            <p className="description">I strive to create clean and elegant designs.</p>
                        </div>                
                    </div>
                {/* </div> */}
                
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
                <SingleAchievement num = {24} str = {'Projects Completed'} />
                <SingleAchievement num = {77} str = {'Contribution in GitHub'} />
                <SingleAchievement num = {7} str = {'Technologies Learnt'} />
                <SingleAchievement num = {1} str = {'Team project'} />
            </div>
        </div>



    )
}

export default Home;
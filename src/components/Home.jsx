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
                        <div class="iconsDiv">
                            <a href="mailto:ravi.g@zohocorp.com" target="_blank">
                                <div class="iconHolder">
                                    <img src="mailIcon.png" alt="" class="icons" />
                                </div>
                            </a>
                            <a href="https://one.zoho.com/zohoone/zohocorp/home/cxapp/people/zpeoplehr/zp#home/user/profile-id:2803000812685670" target="_blank">
                                <div class="iconHolder">
                                    <img src="peopleIcon.png" alt="" class="icons" />
                                </div>
                            </a>
                            
                            <a href="tel:+919342505918" target="_blank">
                                <div class="iconHolder">
                                    <img src="callIcon.png" alt="" class="icons" id="callIcon" />
                                </div>
                            </a>
                            
                        </div>            
                    </div>
                {/* </div> */}
                
                <div className="homeMainRight">
                    {/* <div className="gradient">
                        <img src="virat.png" className="viratImg" alt="" />
                    </div> */}
                    <div className="imgHolder">
                        <img src="ravi.png" alt="" className="picture"/>
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
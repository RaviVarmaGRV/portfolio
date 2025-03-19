import Header from "./Header";
import SingleAchievement from "./SingleAchievement";

function Home({ home, mySkills, myBest, myProjects }) {
    return (

        <div className="homePage" ref={home}>

            <div className="homeMain">
                <div className="homeMainLeft">
                    <p className="role">I am trained in Front-end development</p>
                    <h1 className="iAm">I'm <br /><span className="bigName"> Ravi Varma</span> </h1>
                    <div className="descDiv">
                        <p className="description">I strive to create clean and elegant designs.</p>
                        <p className="description">I transform challenges into solutions, with a touch of code and creativity.</p>
                    </div>
                    <div class="iconsDiv">
                        <button class="iconHolder" title="ravi.g@zohocorp.com">
                            <img src="mailIcon.png" alt="" class="icons" />
                        </button>


                        <button class="iconHolder" title="+91 9342505918">
                            <img src="callIcon.png" alt="" class="icons" id="callIcon" />
                        </button>

                    </div>
                </div>

                <div className="homeMainRight">
                    <div className="imgHolder">
                        <img src="raviVarma.png" alt="" className="picture" />
                    </div>
                </div>
            </div>
            <div className="myAchievements">
                <SingleAchievement num={24} str={'Projects Completed'} />
                <SingleAchievement num={77} str={'Contribution in GitHub'} />
                <SingleAchievement num={7} str={'Technologies Learnt'} />
                <SingleAchievement num={1} str={'Team project'} />
            </div>
        </div>



    )
}

export default Home;
import SingleLanguageBox from "./SingleLanguageBox";
function AllProjectsNavBar({languageSelected, setLanguage}) {
    var languages= ['Node', 'JavaScript', 'HTML/CSS', 'Scratch'];
    return (
        <nav className="projectNavbar">
            {languages.map((val,idx)=>   
                <SingleLanguageBox val={val} idx={idx} languageSelected={languageSelected} setLanguage={setLanguage}/>
            )}
            
        </nav>
    )
}

export default AllProjectsNavBar;

{/* <div className="techsInNavBar">
                Node
            </div>
            <div className="techsInNavBar">
                React
            </div>
            <div className="techsInNavBar">
                HTML/CSS
            </div>
            <div className="techsInNavBar">
                JavaScript
            </div>
            <div className="techsInNavBar">
                Java
            </div>
            <div className="techsInNavBar">
                Scratch
            </div> */}
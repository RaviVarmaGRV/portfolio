function ProjectWithImg({title,bgImg,link}) {
    return (
        <a href={link} target="_blank" className="aTag">
            <div className="singleProject">
                <p>{title}</p>
                {/* <div style={{background:'linear-gradient(to right, #f3298b9c, #866adb8a),url('+bgImg+'.png)', backgroundSize:'100% 100%'}} className="singleProjectImg"> */}
                    <img src={bgImg+'.png'} alt="" className="projectImgg"/>
                {/* </div> */}
            </div>
        </a>
    )
}

export default ProjectWithImg;
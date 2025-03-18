function Header({home, mySkills, myBest, myProjects}) {
    return(
        <header className="header">
            <div className="headersLeft">
                <h2 className="headerName">Ravi Varma</h2>
            </div>

            <ul className="headersRight">
                <li onClick={()=>home.current.scrollIntoView({behavior:'smooth',block:'start'})}>Home</li>
                <li onClick={()=>mySkills.current.scrollIntoView({behavior:'smooth',block:'start'})}>Skills</li>
                <li onClick={()=>myBest.current.scrollIntoView({behavior:'smooth',block:'start'})}>Top Picks</li>
                <li onClick={()=>myProjects.current.scrollIntoView({behavior:'smooth',block:'start'})}>Projects</li>
            </ul>
            
        </header>
    )
}

export default Header;
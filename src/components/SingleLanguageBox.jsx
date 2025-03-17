function SingleLanguageBox({idx,val,languageSelected,setLanguage}){
    return <div className="techsInNavBar" style={(languageSelected==idx)?{background: 'linear-gradient(to right, var(--pink), var(--pinkishViolet))'}:null} onClick={()=>setLanguage(idx)}>
        {val}
    </div>
}

export default SingleLanguageBox;
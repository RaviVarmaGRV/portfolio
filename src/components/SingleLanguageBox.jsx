function SingleLanguageBox({idx,val,languageSelected,setLanguage}){
    return <button className="techsInNavBar" style={(languageSelected==idx)?{background: 'linear-gradient(to right, var(--pink), var(--pinkishViolet))'}:null} onClick={()=>setLanguage(idx)}>
        {val}
    </button>
}

export default SingleLanguageBox;
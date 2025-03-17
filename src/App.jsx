import BestFive from "./components/BestFive";
import Home from "./components/Home";
import SkillsPage from "./components/SkillsPage";
import AllProjects from "./components/AllProjects";
import Header from "./components/Header";
import "./view.css";
import { useEffect, useState, useRef } from "react";

function App() {
  var [showSecHeader,setSecHeader]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>990){
        setSecHeader(true);
      }
      else{
        setSecHeader(false);
      }
    })
  },[])

  var home=useRef();
  var mySkills=useRef();
  var myBest=useRef();
  var myProjects=useRef();

  return (
    <>
      <Home home={home} mySkills={mySkills} myBest={myBest} myProjects={myProjects} />
      <div className="secondHeader" style={showSecHeader?{opacity:1}:{opacity:0}}>
        <Header home={home} mySkills={mySkills} myBest={myBest} myProjects={myProjects}></Header>
      </div>
      
      <SkillsPage mySkills={mySkills} />
      <BestFive myBest={myBest} />
      <AllProjects myProjects={myProjects} />
    </>
  )
}

export default App;
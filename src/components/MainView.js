import React, { useState, useEffect } from "react";
import '../css/MainView.css'
import Title from "./Title";
import SlideToUnlock from "./SlideToUnlock";
import { AiFillLock } from "react-icons/ai";


function MainView () {
    const [slider,setSlider] = useState(0)
    const [view, setView] = useState(true)
    
    const unlock = () => {
        setView(true)
    }
   
    const handleSliderValue = (e) => {
        setSlider(e.target.value)
        console.log(e.target.value)
    }
    useEffect(() => {
        if(slider === "100"){
            setView(false)

        }
    },[slider])
    return (
    <div className="container">
        <Title />
        {view ? <SlideToUnlock handleInput={handleSliderValue} value={slider}/> : <AiFillLock onClick={unlock}/>}
    </div>
)}

export default MainView
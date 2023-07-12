import React from "react";
import '../css/SlideToUnlock.css'

function SlideToUnlock ({slider, handleInput}) {
    return <input type="range" className="slider" value={slider} onChange={handleInput} style={{
      
    }}/>
}

export default SlideToUnlock
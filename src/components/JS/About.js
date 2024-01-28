import React, { useState } from "react";
import '../CSS/About.css'

const About = ()=>{
    const [about,setAbout] = useState(undefined)
    const fetchAbout = async () => {
        setAbout(await fetch('https://webmosaic.petrichor.events/about').then(res=>res.json()).then(data => data.about))
        console.log(about)
    }
    if(!about){
        fetchAbout()
    }
    return (
        <div className="about">
        {about}
        </div>
    )
}

export default About;
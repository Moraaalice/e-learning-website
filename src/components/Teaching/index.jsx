import React from "react";
import './style.css'
import {TiTick} from 'react-icons/ti'
import person from '../../images/person.png'

const OnlinePlatform = () =>{
    return(
        <div className="icon-container">
            <div className="icons">
            <h2 className="platform">Our <span id="span">Online Teaching <br />Platform</span>Enable the <br />Students to</h2>
                <TiTick id="icon"/><span id="span2">Provide basic concepts</span>
                <br />
                <br />
                <TiTick id="icon"/><span id="span2">Solve complicated sums</span>
                <br />
                <br />
                <TiTick id="icon"/><span id="span2">Understand difficult topics</span>
                <br />
                <br />
                <TiTick id="icon"/><span id="span2">Interact with teachers</span>
            </div>
            <div className="image">
                <img src={person} alt="Person Image" />
            </div>
        </div>
    )
}
export default OnlinePlatform;
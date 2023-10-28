import React from "react";
import './style.css';
import {AiFillPlayCircle} from 'react-icons/ai'
import image from "../../images/schooBoy.png"


const Education = () =>{
    return(
        <div className="container2">
            <div className="cont">
            <div className="quality">
              <h2>Get Best Quality <br />
              Education For Your Kids <br />
              More Easier</h2>
              <p>Online learning is a valuable tool for children's edecation <br />
              it's important to approach it with a thoughtful mindset</p> 
            </div>
            <br />
            <div className="getStart">
                <button id="btn">Get Started</button>
                <AiFillPlayCircle id="playcircle"/>
                <span id="learn">Get Started</span>
            </div>
            <br />          
            <div className="numbers">
                <div>
                <h4>10K  </h4>
                <p>Students</p>
                </div>

                <div>
                <h4>300K </h4>
                <p>Students</p>
                </div>

                <div>
                <h4>250 </h4>
                <p>Subjects</p>
                </div>

            </div>
            </div>
            <div className="image">
                <img src={image} alt="School boy" />
            </div>
        </div>
    )
}
export default Education;
import React from "react";
import './style.css'
import baby1 from '../../images/baby1.png'
import baby2 from '../../images/baby.png'
import baby from '../../images/baby2.png'
import {AiFillStar} from 'react-icons/ai'

const CustomerFeedback = () =>{
    return(
        <div className="feedback-container">
            <div className="feedback">
                <h2>What They Say About Us?</h2>
            </div>
            <div className="baby-images">
                <div className="bab-img1">
                    <img src={baby1} alt="baby 1" />
                    <h4>Tessa Martin</h4>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <p>Online learning has revolutionalized the <br />way I approach education,providing me <br />
                    with accessible learning experience</p>
                    <br />
                </div>
                <div className="bab-img2">
                    <img src={baby2} alt="baby" />
                    <h4>Nickie Peter</h4>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <p>The online learning has opened up a<br />world of possibilities allowing access <br />
                    wide range of courses and subjects</p>
                </div>
                <div className="bab-img3">
                    <img src={baby} alt="baby" />
                    <h4>Katty Bell</h4>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <AiFillStar id="star"/>
                    <p>The interactive nature of online learning<br />systems keeps me engaged and motivated<br />
                    I am incredibly greatful</p>
                </div>
            </div>
        </div>
    )
}
export default CustomerFeedback;
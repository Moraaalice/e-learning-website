import React from "react";
import './style.css'
import google from '../../images/google.png'
import visa from '../../images/Visa.png'
import ibm from '../../images/IBM.png'
import buzz from '../../images/buzz.png'
import amazon from '../../images/amazon.png'
import grammar from '../../images/grammar.jpg'
import maths from '../../images/maths.jpg'
import science from '../../images/science.jpg'


const Images = () =>{
    return(
        <div className="container3">

        <div className="logo">
        <img src={google} alt="google logo"/>
        <img id="visa" src={visa} alt="visa logo"/>
        <img id="ibm" src={ibm} alt="ibm logo"/>
        <img src={buzz} alt="visa logo"/>
        <img src={amazon} alt="amazon logo"/>
        </div>
        <div className="courses">
            <h2>OUR BEST SELLING COURSES</h2>
        </div>

        <div className="images">
          <div className="grammar">
            <img src={grammar} alt="grammar image" />
            <p>Learn Grammar in a fun and <br />exiciting way</p>
            <p>$60.00</p>
          </div>
          <div className="maths">
            <img src={maths} alt="maths image" />
            <p>Simple and easy Maths course <br />for kids</p>
            <p>$70.00</p>
          </div>
          <div className="science">
            <img src={science} alt="Science image" />
            <p>Learn Science in a most easiest <br />and fun way</p>
            <p>$80.00</p>
          </div>
        </div>
        <div className="btn-container">
                <button id="button">See All Courses</button>
            </div>
        </div>

    )
}
export default Images;
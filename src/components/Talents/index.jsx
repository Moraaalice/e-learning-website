import React from "react";
import './style.css'
import nikk from '../../images/nikk.png'
import aliya from '../../images/alia.png'
import peter from '../../images/peter.png'
import cecelia from '../../images/cecilia.png'
const Instructors = () =>{
    return(
        <div className="talent-container">
            <div className="talent">
                <h2>Meet Our Talented Instructors</h2>
            </div>
            <div className="instructors-pics">
                <div className="img-1">
                    <img src={nikk} alt="Nik picture" />
                    <h4>Nick Brad</h4>
                    <p>English Lecturer</p>
                </div>
                <div className="img-1">
                    <img src={aliya} alt="Aliya picture" />
                    <h4>Alia Ruth</h4>
                    <p>Science Lecturer</p>
                </div>
                <div className="img-2">
                    <img src={peter} alt="Peter picture" />
                    <h4>John Peter</h4>
                    <p>Maths Lecturer</p>
                </div>
                <div className="img-1">
                    <img src={cecelia} alt="Cecilia picture" />
                    <h4>Sisilia George</h4>
                    <p>History Lecturer</p>
                </div>
            </div>
        </div>
    )
}
export default Instructors;
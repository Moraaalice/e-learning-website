import React from "react";
import './style.css';

const Navbar = () =>{
    return(
        <div className="navbar-container">
        <div>
                <h3>Kidozone</h3>
        </div>
        <div className="navbar">
        < a href="About" >About</a>
        < a href="Teachers">Teachers</a>
        < a href="Courses">Courses</a>
        < a href="Pricing">Pricing</a>
        < a href="Blog">Blog</a>
        </div>
        <div className="buttons">
            <h3>LogIn</h3>
            <button id="button2">Sign Up</button>
        </div>
        </div>
    )
}
export default Navbar;
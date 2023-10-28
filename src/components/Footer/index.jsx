import React from "react";
import './style.css'

const WebFooter = () => {
    return (
        <div className="container-footer">

            <div className="join">
                <h4 id="comm">Join Our Community</h4>
                <br />
                <input type="text" id="fname" name="fname" value="Enter Your Email"/><span><button className="btnsubmit">Submit</button></span>
            </div>


            <div className="footer">
                <div className="myAccount">
                    <h4>My Account</h4>
                    <br />
                    <p>Profile</p>
                    <br />
                    <p>Awards</p>
                    <br />
                    <p>Updates</p>
                </div>
                <div className="company">
                    <h4>Company</h4>
                    <br />
                    <p>About Us</p>
                    <br />
                    <p>History</p>
                    <br />
                    <p>Culture and Trade</p>
                    <br />
                    <p>Blog</p>

                </div>
                <div className="support">
                    <h4>Support</h4>
                    <br />
                    <p>FAQ's</p>
                    <br />
                    <p>Help</p>
                    <br />
                    <p>Contact</p>
                </div>
            </div>



        </div>
    )
}
export default WebFooter;
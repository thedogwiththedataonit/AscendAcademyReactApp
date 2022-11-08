import "./Card1.css"
import Typewriter from "./Typewriter";

function Card1() {

    return(
        <div className="view1">
            <div className="view1_box">
                <div className="titlebox">
                    <Typewriter/>
                    <h4>
                    A personalized approach to online mentorship. Guiding students at every step of their academic career.
                    <br />
                    <br />
                    Mathematics, Science, English? No Bullshit.
                    </h4>
                    <div className="view1_buttonbox">
                    <button id="learn-more-button">I am a Parent/Guardian<i className="fa-solid fa-arrow-pointer"></i></button>
                    <button id="learn-more-button">I am a Student<i className="fa-solid fa-arrow-pointer"></i></button>

                    </div>
                </div>
                <img src="https://uploads-ssl.webflow.com/605190260cb9b4c3a9de71c8/62e321dfb98f61b7bd5f2173_banner-smart-object.png"/>
            </div>
            </div>);
}


export default Card1;
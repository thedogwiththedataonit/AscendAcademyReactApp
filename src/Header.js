import "./Header.css";
import logo from "./img/ascend_logo.png";

function Header() {
    return (<header>
                <button className="header_box">
                    Education
                </button>
                <button className="header_box">
                    Courses
                </button>
                <div className="header_logo_box">
                    <img src={logo}></img>
                </div>
                <button className="header_box">
                    Mentors
                </button>
                <button className="header_box" id="enroll-header">
                    Enroll
                </button>
            </header>);
}

export default Header;
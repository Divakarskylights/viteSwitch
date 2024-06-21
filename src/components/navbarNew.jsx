import React from "react";
import logo from "../media/logo1.png";
import "./navbarStyles.scss";

const NavbarNew = () => {
    return (
        <div className="navbar">
            <div>
                <img src={logo} alt="Logo of Website" />
                {/* <label>Switchology</label> */}
            </div>
            <nav>
                <li>Services</li>
                <li>About Us</li>
                <li>Projects</li>
                <li>Blog</li>
                <button>Login / Signup</button>
            </nav>
        </div>
    );
};

export default NavbarNew;
import React, {useState} from "react";
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import '../css/NavbarClassic.css';
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-fp.png";

const NavbarClassic =()=>{
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    
    return (
        <>

            <nav className="navbar-classic">
                <div className="logo-fp">
                    <img className="logo-img" src={logo} alt="logo-navbar"/> 

                </div>

                <div className={showMediaIcons ? "menu-classic mobile-menu-classic": "menu-classic"}>
                    <ul>
                    <NavLink to='/' >
                        <li>Accueil</li>
                </NavLink>

                <NavLink to='/contact' >
                        <li>Contact</li>
                </NavLink>

                <NavLink to='/e-shop' >
                        <li>Boutique</li>
                </NavLink>

                <NavLink to='/connexion' >
                        <li>Connexion</li>
                </NavLink>

                <NavLink to='/inscription' >
                        <li>Inscription</li>
                </NavLink>
  

                        
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li><a href ='#'><FaFacebookSquare className="facebook"/></a></li>
                        <li><a href ='#'><FaInstagramSquare className="instagram"/></a></li>
                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={()=> setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu className="burger-menu"/>
                        </a>
                    
                    </div>

                </div>
            </nav>
        </>

    )
}

export default NavbarClassic;
import React, {useState} from "react";
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import '../css/NavbarClassic.css';
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-fp.png";

const NavbarAdmin =()=>{
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    
    return (
        <>

            <nav className="navbar-classic">
                <div className="logo-fp">
                    <img className="logo-img" src={logo} alt="logo-navbar"/> 

                </div>

                <div className={showMediaIcons ? "menu-classic mobile-menu-classic": "menu-classic"}>
                    <ul>
                
                <NavLink to='/agenda-admin' >
                        <li>Agenda</li>
                </NavLink>
  
                <NavLink to='/contact-admin' >
                        <li>Contact</li>
                </NavLink>

                <NavLink to='/shop-admin' >
                        <li>Boutique</li>
                </NavLink>


                <NavLink to='/blog' >
                        <li>Blog</li>
                </NavLink>

                <NavLink to='/client-admin' >
                        <li>Mes clients</li>
                </NavLink>

                <NavLink to='/newsletter' >
                        <li>Newsletter</li>
                </NavLink>

                <NavLink to='/deconnexion' >
                        <li>Deconnexion</li>
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

export default NavbarAdmin;
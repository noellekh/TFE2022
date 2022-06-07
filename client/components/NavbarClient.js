import React, {useState} from "react";
import axios from 'axios';

import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import '../css/NavbarClassic.css';
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../img/logo-fp.png";

const NavbarClient =()=>{
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const navigate = useNavigate();

    const Logout = async () =>{
        try{
            await axios.delete("http://localhost:3001/api/v1/authent/logout");
            navigate('/');

        }catch(error){
            console.log(error);

        }
    }

    return (

        <>

        <nav className="navbar-classic">
            <div className="logo-fp">
                <img className="logo-img" src={logo} alt="logo-navbar"/> 

            </div>

            <div className={showMediaIcons ? "menu-classic mobile-menu-classic": "menu-classic"}>
                <ul>
                <NavLink to='/accueil-client' >
                        <li>Accueil</li>
                </NavLink>

                <NavLink to='/contact' >
                        <li>Contact</li>
                </NavLink>

                <NavLink to='/eshop'>
                    <li>Boutique</li>

                </NavLink>

                <NavLink to='/agenda-client' >
                        <li>Agenda</li>
                </NavLink>

                <NavLink to='/training' >
                        <li>Training</li>
                </NavLink>

                <NavLink to='/astuces' >
                        <li>Astuces</li>
                </NavLink>

                <button onClick={Logout} className="bouton-deconnexion">Se déconnecter</button>

    
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

export default NavbarClient
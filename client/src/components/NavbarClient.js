import React, {useState, useEffect} from "react";
import axios from 'axios';

import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import '../css/Navbar.css';
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../img/logo-fp.png";
import { AuthContext } from "../helpers/Auth";

const NavbarClient =()=>{
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const navigate = useNavigate();
    const [authState, setAuthState] = useState({
        user_email:"",
        user_id:0,
        status: false
    });

    useEffect (()=>{
        axios.get("http://localhost:3001/auth/auth",{
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
        .then((response)=>{
            if (response.data.error){
                setAuthState({...authState, status: false});
            }else{
                setAuthState({
                    user_email: response.data.user_email,
                    user_id: response.data.user_id,
                    status: true,
                });
            }
        });
    },[]);

    const logout = ()=>{
        localStorage.removeItem("accessToken");
        setAuthState({user_email:"", user_id:0, status:false});
        navigate('/');
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

                <NavLink to='/rdv-clients' >
                        <li>Agenda</li>
                </NavLink>

                <NavLink to='/trainings' >
                        <li>Trainings</li>
                </NavLink>

                <NavLink to='/astuces' >
                        <li>Astuces</li>
                </NavLink>
                
                <h2>{authState.user_email}</h2>

                <button onClick={logout}  className="bouton-deconnexion">Se déconnecter</button>

    
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
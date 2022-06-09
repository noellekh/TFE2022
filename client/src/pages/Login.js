import React, {useState, useContext} from 'react';
import NavbarClassic from '../components/NavbarClassic';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Singin.css';
import { AuthContext } from '../helpers/Auth';



function Login() {

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setAuthState}= useContext(AuthContext);

  const login = ()=>{
    const data = {user_email:mail, user_password:password}
    axios.post("http://localhost:3001/auth/login", data ).then ((response)=>{
      if(response.data.error){
        alert(response.data.error);
      }else{
      localStorage.setItem("accessToken", response.data);
      setAuthState(true);
      navigate('/accueil-client')
      }
    });

  };
  return (
    <div>
      <NavbarClassic />
      <div className='signin'>

        <div className='form-signin'>
          <h2>Se connecter</h2>
        <label>Entrez votre adresse mail </label>
        <input id="createuser" type='text' onChange ={(event)=>{setMail(event.target.value)}}></input>

        <label>Entrez votre mot de passe</label>
        <input id="createuser" type='password' onChange ={(event)=>{setPassword(event.target.value)}}></input>

        <button onClick={login} className='button-signin'>Se connecter</button>
        </div>
      </div>
    </div>
  )
}

export default Login
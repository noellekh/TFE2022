import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import AccueilClassic from './pages/AccueilClassic';
import RdvClients from './pages/RdvClients';
import Trainings from './pages/Trainings';
import CreateTrainings from './pages/CreateTrainings';
import Scores from './pages/Scores';
import Connexion from './pages/Login';
import Inscription from './pages/Singin';
import AccueilClient from './pages/AccueilClient';
import { AuthContext } from './helpers/Auth';
import {useState, useEffect} from "react";
import axios from 'axios';


function App() {

  const [authState, setAuthState]= useState(false);

  useEffect(()=>{
    axios.get("http://localhost:3001/auth/auth",
     {headers:{
       accessToken: localStorage.getItem("accessToken")
     },}).then((response)=>{
      if (response.data.error){
        setAuthState(false);
      }else{
        setAuthState(true); 

      }
    });
    },[]);

  
  return (
    <div className="App"> 
    <AuthContext.Provider value={{authState, setAuthState}}>
    <Router>
      <Routes>

        <Route path = "/" element={<AccueilClassic/>}/>
        <Route path='/accueil-classic' element={<AccueilClassic/>} />
        <Route path='/accueil-client' element={<AccueilClient/>} />
        <Route path = "/rdv-clients" element = {<RdvClients/>}/>  
        <Route path = "/trainings" element ={<Trainings/>}/>
        <Route path = "/scores/:id_training" element ={<Scores/>}/>
        <Route path = "/create-trainings" element ={<CreateTrainings/>}/>
        <Route path = "/login" element ={<Connexion/>}/>
        <Route path = "/signin" element ={<Inscription/>}/>
      </Routes>
    </Router>
    </AuthContext.Provider>

    </div>
      
  );
}

export default App;

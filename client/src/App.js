import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import AccueilClassic from './pages/AccueilClassic';
import RdvClients from './pages/RdvClients';
import Trainings from './pages/Trainings';
import CreateTrainings from './pages/CreateTrainings';


function App() {

  
  return (
    <div className="App"> 
    <Router>
      <Routes>
        <Route path = "/" element={<AccueilClassic/>}/>
        <Route path='/accueil-classic' element={<AccueilClassic/>} />
        <Route path = "/rdv-clients" element = {<RdvClients/>}/>
{/*
        <Route path = "/rdv-clients/:id" element = {<RdvClients/>}/>
*/}   
        <Route path = "/trainings" element ={<Trainings/>}/>
        <Route path = "/create-trainings" element ={<CreateTrainings/>}/>
      </Routes>
    </Router>

    </div>
      
  );
}

export default App;

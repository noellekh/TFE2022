import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import AccueilClassic from './pages/AccueilClassic';
import RdvClients from './pages/RdvClients';
import Trainings from './pages/Trainings';


function App() {

  
  return (
    <div className="App"> 
    <Router>
      <Link to ="/">Accueil</Link>
      <Link to ="/rdv">Réserver</Link>
      <Link to ="/trainings">Trainings</Link>
      <Routes>
        <Route path = "/" element={<AccueilClassic/>}/>
        <Route path = "/rdv" element = {<RdvClients/>}/>
        <Route path = "/trainings" element ={<Trainings/>}/>
      </Routes>
    </Router>

    </div>
      
  );
}

export default App;

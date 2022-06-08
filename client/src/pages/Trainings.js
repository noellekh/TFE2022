import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../css/Trainings.css";
import NavbarClient from "../components/NavbarClient";
import imgsquat from "../img/air-squat.jpg";
import crunch from "../img/crunch.jpg";
import planche from "../img/plank.jpg";


function Trainings() {
    let {id_training} = useParams();
    const [trainingObject, setTrainingObject] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3001/training")
        //.then((res)=> res.json())
        .then((response)=>{
            setTrainingObject(response.data);
        });
    },[]);
  return (

    <div className="training">
    <NavbarClient/>
    <div className="training-container">
    <h1>Exercices</h1>

    {trainingObject.map((value)=>(
        

            <div className="exercice" 
                key={value.id_training}
                onClick={()=>{
                    navigate(`/scores/${value.id_training}`)
                }}>
  
                <div className="exo-name">
                    
        
                    <h2>{value.training_name}</h2>
                    <img className="exo-img" src={imgsquat} alt="img"/>
                    <p>{value.training_descri}</p>
                    <form className="exo-form">
                        <input type="text" className="exo-input" placeholder="Nbr de répétition en 30s"/>
                        <button className="exo-button">Ajouter score</button>
                    </form>

                 </div>

        




            </div>
            )
    )}

    </div>


</div>

  )
}

export default Trainings
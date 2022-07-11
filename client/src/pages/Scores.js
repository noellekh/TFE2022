import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Trainings.css";
import axios from "axios";
import imgsquat from "../img/air-squat.jpg";
import NavbarClient from "../components/NavbarClient";



function Scores() {

    let {id_training} = useParams();
    const [scores, setScores] = useState([]);
    const [trainingsObject, setTrainingsObject]=useState({});
    const [newScore, setNewScore]= useState("");

    const scoreList = scores.map((list)=>{
        return (list.score);
    });

    const bestScore=Math.max(...scoreList);

    //console.log(bestScore)

    

    useEffect(()=>{
        axios.get(`http://localhost:3001/training/byId/${id_training}`).then((response)=>{
            setTrainingsObject(response.data);
            
        });

        axios.get(`http://localhost:3001/scores/${id_training}`).then((response)=>{
            setScores(response.data);
            
        });


    });

    const addScore =() =>{
        axios.post("http://localhost:3001/scores", {
            score: newScore,
            id_training: id_training,
        },
        {
            headers:{
                accessToken: localStorage.getItem("accessToken"),
            },
        })
        .then((response)=>{
            if(response.data.error){
                alert(response.data.error);
            }else{
                const scoreAdd = {score: newScore, user_id: response.data.user_id};
                setScores([...scores, scoreAdd]);
                setNewScore("");
            }

        });
    };

    const deleteScore = (id_score, e) => {
        axios
          .delete(`http://localhost:3001/scores/${id_score}`, {
            headers: { accessToken: localStorage.getItem("accessToken") },
          })
          .then(() => {
            setScores(
                scores.filter((val) => {
                  return val.id_score !== id_score;
                })
              );
            alert("Score supprimé avec succés ! ")
          });
      };

  return (
    <div className="training">
        <NavbarClient />
        <div className="training-container">
            <div className="exercice">
                <div className="exo-name">
                    <h2>{trainingsObject.training_name}</h2>
                    <img className="exo-img" src={imgsquat} alt="img"/>
                    <p>{trainingsObject.training_descri}</p>
                    <div className="add-score">
                        <input 
                            type="text" 
                            className="exo-input" 
                            placeholder="Nbr de répétition en 30s"
                            value={newScore}
                            onChange={(event)=>{
                                setNewScore(event.target.value);
                            }}
                            />
                        <button className="exo-button" onClick={addScore}>Ajouter score</button>
                    </div>
                    <div className="affichage-score">
                        <label>Mes scores: </label>
                        
                        {scores.map((score, key)=>{
                            return (
                            
                            <div className="score" key={key}>
                                <h2>{score.score_date}: {score.score} rép.</h2>
                                <button className="exo-button" onClick={()=>deleteScore(score.id_score)}>Initialiser</button>
                                
                                
                            </div>                   
                            )
                        })}

                        <label>Mon meilleur score: </label>
                        <div className="score">
                            <h2>{bestScore} répétitions</h2>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    </div>
    
  )
}

export default Scores
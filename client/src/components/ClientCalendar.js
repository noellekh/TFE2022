import React, {Component, useState} from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import moment from "moment";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";


//import format from 'date-fns'

import { registerLocale } from "react-datepicker";
import fr from 'date-fns/locale/fr';
import { useEffect } from "react";
registerLocale('fr', fr)



function ClientCalendar() {
    let {user_id} = useParams();

    const [chooseDate, setChooseDate] = useState(null);
    const [coaching, setCoaching] = useState('')
    const navigate = useNavigate()

    const handleChoiceDate=(date)=>{
        setChooseDate(date)
        console.log(chooseDate)
        return date;
    };


    const storeDate =  (e)=>{
        e.preventDefault()
        try{
             axios.post('http://localhost:3001/agendaclient/',{ag_date:chooseDate, user_id:user_id},{
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                }
            }).then(()=>{
                console.log('ok')
            })
            navigate('/agenda-client')
            alert("Sauvegardé avec succè !")
            console.log("RDV  ", chooseDate);
        }catch(error){
            console.log("erreur agenda: ", error);
        }


    }

  return (
<div className="ag-client-datepicker">
            <div>
                <label>Choisir un rendez-vous</label>
    
            </div>

            <div className="champ-calendar">
                <form  className="form-calendar">
                    <DatePicker
                        selected={chooseDate}
                        onChange={handleChoiceDate}
                        dateFormat="yyyy/dd/MM EE HH:mm "
                        showTimeSelect
                        timeintervals={60}
                        locale='fr'
                    />
                    <button onClick={storeDate} className="button-calendar">Sauvegarder</button>

                    <div className="ag-client-choix">
                        <p>Vous avez choisi {chooseDate ? chooseDate.toString(): null}</p>
                        <p>{moment(chooseDate).format("dddd  DD/MM/yyyy à HH:mm")}</p>

                    </div>

                </form>
            </div>
            



        </div>  )
}

export default ClientCalendar
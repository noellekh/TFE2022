import React, {Component, useState} from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import moment from "moment";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
//import format from 'date-fns'

import { registerLocale } from "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)



function ClientCalendar() {

    const [chooseDate, setChooseDate] = useState(null);
    const [coaching, setCoaching] = useState('')
    const navigate = useNavigate()

    const handleChoiceDate=(date)=>{
        setChooseDate(date)
        console.log(chooseDate)
        return date;
    };
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
                    <button type="submit" className="button-calendar">Sauvegarder</button>

                    <div className="ag-client-choix">
                        <p>Vous avez choisi {chooseDate ? chooseDate.toString(): null}</p>
                        <p>{moment(chooseDate).format("dddd  DD/MM/yyyy à HH:mm")}</p>

                    </div>

                </form>
            </div>
            



        </div>
  )
}

export default ClientCalendar
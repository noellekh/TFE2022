import React, {Component, useState} from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import moment from "moment";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay"
import { registerLocale } from "react-datepicker";
import fr from 'date-fns/locale/fr';
import { useEffect } from "react";
registerLocale('fr', fr)



function ClientCalendar() {
    let {user_id} = useParams();

    const [chooseDate, setChooseDate] = useState(null)
    const [coaching, setCoaching] = useState('')
    const [chosenDate, setChosenDate]= useState([]);
    const [excludeDate, setExcludeDate]= useState([])
    const navigate = useNavigate();

    const exclu = excludeDate.map((val)=>{
        return val.ag_date
    });

    console.log("dates prise: ", exclu)
    console.log("date choisie", chooseDate)

    const PassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const isAvailable = () => {
        const notAvailday = excludeDate.map((val)=>{
            return val.ag_date
        });

        for (var i=0; i < notAvailday.length; i++){
            //console.log('not available: ', notAvailday[i])
            return notAvailday[i]
        }
        
        console.log(notAvailday, "")

        
    }

           


    const chooseDateFormat = moment(chooseDate).format("DD/MM/YYYY")

    for (var i=0; i < exclu.length; i++){
        const excludeDateFormat = moment(exclu[i]).format("DD/MM/YYYY")
        //console.log("DATES ",excludeDateFormat)
    }
    

    //console.log(typeof(exclu), exclu[1], exclu.length)
    //console.log(chooseDateFormat)
    //console.log(typeof(chooseDate),chooseDate)


    const handleChoiceDate=(date)=>{

        setChooseDate(date)
        return date;
    };


    const storeDate =  (e)=>{
        e.preventDefault()
        try{
             axios.post('http://localhost:3001/agendaclient/',{ag_date:chooseDate, user_id:user_id},{
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                accessToken: localStorage.getItem("accessToken"),
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

    useEffect(()=>{
        axios.get(`http://localhost:3001/agendaclient/${user_id}`).then((response)=>{
            setChosenDate(response.data)
            
        });

        axios.get("http://localhost:3001/agendaclient/").then((response)=>{
            setExcludeDate(response.data)
        })
    },[])

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
                        minDate= {new Date()}
                        filterDate={isAvailable}
                        showTimeSelect
                        timeintervals={60}
                        filterTime={PassedTime}
                        minTime={setHours(setMinutes(new Date(), 0), 9)}
                        maxTime={setHours(setMinutes(new Date(), 0), 17)}
                        locale={fr}
                    />
                    <button onClick={storeDate} className="button-calendar">Sauvegarder</button>

                    <div className="ag-client-choix">
                        <p>Vous avez choisi {chooseDateFormat ? chooseDateFormat.toString(): null}</p>
                        <p>{moment(chooseDate).format("dddd DD/MM/yyyy à HH:mm")}</p>
                    </div>

                    <div className="ag-client-rdv">
                        <h2>Vos rendez-vous</h2>
                        {chosenDate.map((choose, key)=>{
                            return(
                                <div className="my-coaching" key={key}>
                                    {choose.ag_date}
                                </div>
                            )
                        })}
                    </div>

                </form>
            </div>
            



        </div>  )
}

export default ClientCalendar
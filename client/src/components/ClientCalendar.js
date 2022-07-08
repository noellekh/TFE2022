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

    console.log("choose, ", chooseDate);
    console.log("chosen, ", chosenDate);

    const exclu = excludeDate.map((val)=>{
        return val.ag_date
    });

    const disableDates = current =>{
        return !exclu.includes(current.format('DD/MM/YYYY'));
    }

    console.log("dates prise: ", exclu)
    console.log("date choisie", chooseDate)

    const PassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const isAvailable = () => {
        const ListnotAvailday = excludeDate.map((val)=>{
            return val.ag_date
        });

        for (var i=0; i < ListnotAvailday.length; i++){
            const notAvailday = ListnotAvailday[i]
            //console.log(notAvailday, chooseDate)
            return notAvailday;
            };


  
    
        
    }

           
    const chooseDateFormat = moment(chooseDate).format("DD/MM/YYYY")

    for (var i=0; i < exclu.length; i++){
        const excludeDateFormat = moment(exclu[i]).format("DD/MM/YYYY")
        //console.log("DATES ",excludeDateFormat)
    }
    

    //console.log(typeof(exclu), exclu[1], exclu.length)
    console.log(chooseDateFormat)
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


    };

    const DeleteCaoching = (ag_id, user_id)=>{

        axios.delete(`http://localhost:3001/agendaclient/${ag_id}/${user_id}`,{
            headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then(()=>{

            setChosenDate(
                chosenDate.map(val=>{
                    return val.ag_id!==ag_id;
                }))


            //alert("Coaching supprimer avec succés !")
        });
    };

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
                        dateFormat="dd/MM/yyyy h:mm"
                        minDate= {new Date()}
                        isValideDate={isAvailable}
                        showTimeSelect
                        timeIntervals={60}
                        filterTime={PassedTime}
                        minTime={setHours(setMinutes(new Date(), 0), 9)}
                        maxTime={setHours(setMinutes(new Date(), 0), 17)}
                        locale={fr}
                    />
                    <button onClick={storeDate} className="button-calendar">Sauvegarder</button>

                    <div className="ag-client-choix">
                        <p>Vous avez choisi {chooseDateFormat ? chooseDateFormat.toString(): null}</p>
                        <p>{moment(chooseDate).format("DD/MM/yyyy à HH:mm ")}</p>
                    </div>

                    <div className="ag-client-rdv">
                        <h2>Vos rendez-vous</h2>
                        {chosenDate.map((choose, key)=>{
                            return(
                                
                                <div className="my-coaching" key={key}>
                                    <ul>
                                        <li>{moment(choose.ag_date).format(" DD/MM/YYYY à HH:mm ")}</li>
                                        <li>{choose.ag_id}</li>
                                        <button onClick={()=>{DeleteCaoching(chosenDate.ag_id, chosenDate.user_id)}}>Supprimer</button>
                                    </ul>
                                    
                                </div>
                            )
                        })}
                    </div>

                </form>
            </div>
            



        </div>  )
}

export default ClientCalendar
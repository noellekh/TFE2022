import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import DatePicker from 'react-datepicker';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay"
import axios from "axios";
import Popup from "reactjs-popup";
import { useParams } from "react-router-dom";
import fr from 'date-fns/locale/fr';
import ClientCalendar from '../components/ClientCalendar';
import DatePickerClient from '../components/Datepicker';
registerLocale('fr', fr)


moment.locale("fr");

const localizer = momentLocalizer(moment);

const AdminCalendar= props => {

    let {ag_id} = useParams();

    const [trainings, setTrainings] = useState([]);
    const [events, setEvents] = useState([]);
    const [newDate, setNewDate] = useState(null);
    const [popOpen, setPopOpen]= useState(false);

    const togglePopup=()=>{
        setPopOpen(!popOpen);
    };
/*
    const handleChoiceDate=(date)=>{
        setNewDate(date)
        return date;
    };

    const PassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };
*/

    const coaching = trainings.map((training)=>{
        return{
            id: training.user_id,
            title: training.ag_date,
            start: new Date(training.ag_date),
            end: new Date(training.ag_date),
            allDAy: false
        }
    });

    console.log(coaching)
    useEffect(()=>{
        getAllAgendaClient()
    },[]);

    const getAllAgendaClient=()=>{
        try{
             axios.get('http://localhost:3001/agendaclient')
            .then(function (response) {
            setTrainings(response.data)
            })
        }catch(error){
            console.log('ERROR agenda admin:', error)

        }         
    };

    const DeleteEvent = (ag_id)=>{

        axios.delete(`http://localhost:3001/agendaclient/${ag_id}`,{
            headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then(()=>{

            setTrainings(
                trainings.map(val=>{
                    return val.ag_id!==ag_id;
                }))


            alert("Coaching supprimer avec succés !")
        });
    };

    const ChangeEvent =(newD)=>{
        
        try{
            axios.put ('http://localhost:3001/agendaclient/coaching-event',{ag_date: newDate, ag_id:ag_id},
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    accessToken: localStorage.getItem("accessToken"),
                    }
            }).then(()=>{
    
                setNewDate({...newDate, ag_date:newD})
    
                alert('Date modifiée avec succés !')
            })
        }catch(error){
            console.log("erreur admin: ", error);
        }

    };

    
        return (
            <div className="big-calender">
                <Calendar 
                onSelectEvent={togglePopup}
                //onSelectEvent={getAllAgendaClient}
                timeslots={4}
                localizer={localizer}
                events={coaching}
                startAccessor='start'
                endAccessor='end'
                views={['month', 'day', 'week']}
                style={{height: 450}}
                           
                />

                {popOpen && <Popup 
                trigger={<button> Trigger</button>} 
                position="bottom"
                handleClose={togglePopup}>
                    <div>Popup content here !!</div>
                    {trainings.map((event, key)=>{
                        return(
                            <div key={event.ag_id}>
                                <h2>Nom: {event.user_id}</h2>
                                <p>Date: {event.ag_date}</p>
                                <div className="admin-datePicker">
                                    <p>Modifier la date: </p>
                                <DatePickerClient>

                                </DatePickerClient>
                                
                                </div>
                                
                                <button onClick={()=>{DeleteEvent(event.ag_id)}}>Supprimer</button>
                                <button onClick={ChangeEvent}>Sauvegarder</button>
                            </div>
                        )
                    })}
                    <button>Close</button>
                    
                </Popup>}

            </div>
    
        )
    

}; 


 export default AdminCalendar;
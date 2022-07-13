import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

moment.locale("fr");

const localizer = momentLocalizer(moment);

const AdminCalendar= props => {

    const [trainings, setTrainings] = useState([]);

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
    
        return (
            <div className="big-calender">
                <Calendar 
                onSelectEvent={event => 
                    alert(`${event.title} ${event.id}`)}
                //onSelectEvent={getAllAgendaClient}
                timeslots={4}
                localizer={localizer}
                events={coaching}
                startAccessor='start'
                endAccessor='end'
                views={['month', 'day', 'week']}
                style={{height: 450}}
                
                
                />

            </div>
    
        )
    

}; 


 export default AdminCalendar;
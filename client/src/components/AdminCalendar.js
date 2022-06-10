import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";



const AdminCalendar= ()=> {

    moment.locale("fr");

    const localizer = momentLocalizer(moment);

    const [trainings, setTrainings] = useState([])
    useEffect(()=>{
        getAllAgendaClient()
    },[]);

    const getAllAgendaClient=()=>{
        try{
             axios.get('http://localhost:3001/agendaclient')
            .then(function (response) {
            setTrainings(response.data)
            })
            console.log('trainings: ', setTrainings);
        }catch(error){
            console.log('ERROR agenda admin:', error)

        }

        
        
        
    }

    const eventList =trainings.map((training)=>{
        return{
            id: trainings.id_user,
            title: training.agenda_user_date,
            start: new Date(training.agenda_user_date),
            end: new Date(training.agenda_user_date),
            allDAy: false
        }

    })
    //console.log(eventList);

    return (
        <Calendar 
        onSelectEvent={eventList}
        localizer={localizer}
        events={eventList}
        startAccessor='start'
        endAccessor='end'
        views={['month', 'day', 'week']}
        style={{height: 450}}
        />

    )

};

 export default AdminCalendar;
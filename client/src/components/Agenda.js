import React, { Component } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'

moment.locale("fr");
const localizer = momentLocalizer(moment);

class Agenda extends Component{
    

    constructor(props){
        super(props)
        

        this.state={
            cal_events: [],
        }
    }

    convertDate = (date) =>{
        return moment.utc(date).toDate
    }

    componentDidMount(){
        this.mounted = true;
        axios.get("http://localhost:3001/agendaclient")
        .then(response=>{
            if(this.mounted){
                console.log(response.data);
                let appointments = response.data;
    
                for(let i =0; i< appointments.lenght; i++){
                    appointments[i].start = this.convertDate(appointments[i].start);
                    appointments[i].end = this.convertDate(appointments[i].end);
    
                }
    
                this.setState({
                    cal_events: appointments
                })
            }

        })

        .catch(function(error){
            console.log("ERREUR",error);
        });
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    render (){
        const { cal_events } = this.state
        return(
            <div className='big-calendar'>
                <Calendar
                    localizer={localizer}
                    events={cal_events}
                    step={30}
                    defaultView="week"
                    views={['month', 'week', 'day']}
                    defaultDate={new Date()}
                />
            </div>
        )
    }
}

export default Agenda;

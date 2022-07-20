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
import { useEffect, useState } from "react";
registerLocale('fr', fr)


function DatePickerClient(){
    let {user_id} = useParams();
    const [chooseDate, setChooseDate] = useState(null);

    const PassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

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
            alert("Sauvegardé avec succè !")
            console.log("RDV  ", chooseDate);
        }catch(error){
            console.log("erreur agenda: ", error);
        }


    };

    return(
        <div className="DatepickerClient">
                    <DatePicker
                        selected={chooseDate}
                        onChange={handleChoiceDate}
                        dateFormat="dd/MM/yyyy h:mm"
                        minDate= {new Date()}
                        showTimeSelect
                        timeIntervals={60}
                        filterTime={PassedTime}
                        minTime={setHours(setMinutes(new Date(), 0), 9)}
                        maxTime={setHours(setMinutes(new Date(), 0), 17)}
                        locale={fr}
                    />
                    <button onClick={storeDate} className="button-calendar">Sauvegarder</button>
        </div>
    )




}
export default DatePickerClient
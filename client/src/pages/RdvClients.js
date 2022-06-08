import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import NavbarClient from '../components/NavbarClient';
//import {useNavigate} from 'react-router-dom';
//import {useParams} from 'react-router-dom';

function RdvClients() {
    //const navigate = useNavigate();
    //const {id} = useParams();
    const [listAgendaClient, setListAgendaClient] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/agendaclient").then ((response)=>{
            setListAgendaClient(response.data)
      
    })

  }, [])
  return (
    <div className='rdv-client'>
      <NavbarClient /> 
       <h1>Hey</h1>
       
    {listAgendaClient.map((value, key)=>{ 
            return (

                <div className='rdv' key={key}>
{/*                 
                <div className='rdv' 
                
                key ={key} 
                onClick={()=>{
                  navigate('/rdv-clients/${value.id}');
                }}>
*/}                

                    <h1>Hello</h1>
                    <h2>{value.ag_date}</h2>
                </div>
            );
            })}
    </div>
   
  )
}

export default RdvClients
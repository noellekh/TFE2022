import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import NavbarClient from '../components/NavbarClient';

function RdvClients() {
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
                <div>
                    <h1>Hello</h1>
                    <h2>{value.ag_date}</h2>
                </div>
            );
            })}
    </div>
   
  )
}

export default RdvClients
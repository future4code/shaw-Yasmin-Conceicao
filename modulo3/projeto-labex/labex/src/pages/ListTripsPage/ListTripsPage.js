//para vermos todas as viagens

import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/baseurl";

export default function ListTripsPage(){
    const [list, setList] = useState([])

    const navigate = useNavigate()

    const goToHomePage = () =>{
        navigate("/")
    }

    const goBack = () =>{
        navigate(-1)
    }

    const getTrips = () =>{
        axios.get(`${BASE_URL}/trips`)
        .then((res)=>{
            console.log(res.data)
            setList(res.data.list)
        })
        .catch((err)=>{
            alert(err.response)
        })
    }

    useEffect(()=>{
        getTrips()
    },[])

    const tripsList = list && list.map((trip)=> {
        return (
            <div key={trip.id}>

            <p><strong>Nome:</strong>{trip.name}</p>
            <p><strong>Descrição:</strong>{trip.planet}</p>
            <p><strong>Duração:</strong>{trip.durationInDays}</p>
            <p><strong>Data:</strong>{trip.date}</p>
                
               
            </div>
        )
    })



    return(
     <div>
        <h1>Eu sou o  ListTripsPage</h1>
         

        <button onClick={goToHomePage}>Página home</button>

        <button onClick={goBack}>Voltar</button>
        {tripsList}
    </div>   
    )
    

}
//para vermos todas as viagens

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/baseurl";
import { Button, Typography } from "@mui/material";
import { BoxButton } from "./styled";

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
            setList(res.data.trips)
        })
        .catch((err)=>{
            alert(err.response)
        })
    }

    useEffect(()=>{
        getTrips()
    },[])

    const tripsList = list.length > 0 && list.map((trip)=> {
        
        return (
            <div key={trip.id}>

            <p><strong>Nome:{trip.name} </strong> </p>
            <p><strong>Descrição: {trip.planet}</strong></p>
            <p><strong>Duração: {trip.durationInDays}</strong></p>
            <p><strong>Data:{trip.date}</strong></p>
                
               
            </div>
        )
    })



    return(
     <div>
        <Typography variant="h1" align={'center'} gutterBottom>lista de viagens</Typography>
        
         {tripsList}

        <BoxButton>
         <Button variant={'outlined'} color={'secondary'}  onClick={goBack}>voltar</Button>

         <Link to={'/trips/application'}>
          <Button variant={'contained'} color={'primary'}>criar viagem</Button>  
         </Link>
           
        </BoxButton>
         
        
        
        
        
    </div>   
    )
    

}
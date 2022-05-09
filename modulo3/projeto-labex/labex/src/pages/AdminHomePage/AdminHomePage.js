
//para o administrador ver a lista de viagens e poder deletalas ou acessar o detalhe de cada uma delas

import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/baseurl";
import { useVerificaToken } from "../../hooks/useVerificaToken";
import { useState, useEffect } from "react";
import {useToken} from "../../hooks/useToken"
import { useNavigate } from "react-router-dom";
import { Button, IconButton, SvgIcon, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { ContainerAdmn } from "./styled";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import DeleteIcon from '@mui/icons-material/Delete'

export default function AdminHomePage(){

   useVerificaToken()
   const [list, setList] = useState([])
   const navigate = useNavigate()

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


    const authorization = useToken()

    const deletTrip = (id) =>{
        axios.delete(`${BASE_URL}/trips/${id}`, authorization)
        .then((res)=>{
            alert('Viagem excluída com sucesso',res.data.trips)
            getTrips()
        })
        .catch((err)=>{
            alert('Erro, tente novamente', err.response)
        })
    

    }

    const goToDetailPage = (navigate,id) =>{
        navigate (`/admin/trips/${id}`)
    }

    const goToLoginPage = (navigate) =>{
        navigate('/login')
    }

    const goToCreateTripPage = (navigate) =>{
        navigate('/admin/trips/create')
    }

    const tripsList = list.length > 0 && list.map((trip =>{
        return(
            <div key={trip.id}>

                <Typography onClick={() => goToDetailPage(navigate, trip.id)}><strong>Nome:</strong> {trip.name}</Typography>

                <IconButton  onClick={() => deletTrip(trip.id)}   aria-label="delete" >
                     <DeleteIcon />
                </IconButton>
            </div>
        )
    }))


    const logout = () =>{
        window.localStorage.removeItem('token')
        goToLoginPage(navigate)

    }
    

    return(
     <div>
         <ContainerAdmn>
       <Typography variant="h1" align={'center'} gutterBottom>LabeX</Typography>
        {tripsList}

        <div>
            <Button variant={'outlined'} color={'primary'} onClick={()=> goToLoginPage(navigate) }>voltar</Button>
            <Button variant={'contained'} color={'secondary'} onClick={()=> goToCreateTripPage(navigate) }>criar viagem</Button>
            <Button variant={'outlined'} color={'primary'} onClick={()=> logout(navigate) }>sair</Button>
        </div>
        </ContainerAdmn>
    </div>   
    )
    
}
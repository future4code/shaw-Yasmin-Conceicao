//Para o usuario escolher entre Área administrativa e lista de viagens

import { Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material"
import { ContainerButton } from "./styled";

export default function HomePage(){
    // const navigate = useNavigate()

    // const goToListTripsPage = () =>{
    //     navigate("/trips/list")
    // }

    // const goToAdmin = () =>{
    //     navigate("/login")
    // }

    return(
        <div>
            <Typography variant="h1" align={'center'} gutterBottom>Home</Typography>

           
        <ContainerButton>

            <Link to={'/trips/list'}>
            <Button variant={'outlined'} color={'secondary'} >Lista viagens</Button>
            </Link>

            <Link to={'/login'}>
            <Button variant={'contained'} color={'primary'}  >Área do Administardor</Button>
            </Link>
            
            
        </ContainerButton>
            
        </div>
    )
}
//Para o usuario escolher entre Área administrativa e lista de viagens

import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate()

    const goToListTripsPage = () =>{
        navigate("/trips/list")
    }

    const goToAdmin = () =>{
        navigate("/login")
    }

    return(
        <div>
            <h1>Eu sou o HomePage</h1>

            <iframe src="https://giphy.com/embed/xT0GqG6ueZcOJqjkfC" width="480" height="251" frameBorder="0"  allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nasa-space-90-million-miles-away-xT0GqG6ueZcOJqjkfC">via GIPHY</a></p>

            <button onClick={goToListTripsPage}>Lista viagens</button>

            <button onClick={goToAdmin}>Área de Admin</button>

        </div>
    )
}
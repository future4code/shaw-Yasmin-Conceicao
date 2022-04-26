//para vermos todas as viagens

import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListTripsPage(){
    const navigate = useNavigate()

    const goToHomePage = () =>{
        navigate("/")
    }

    const goBack = () =>{
        navigate(-1)
    }



    return(
     <div>
        <h1>Eu sou o  ListTripsPage</h1>

        <iframe src="https://giphy.com/embed/lXC2gmHf2ypUs" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lXC2gmHf2ypUs">via GIPHY</a></p>

        <button onClick={goToHomePage}>Página home</button>

        <button onClick={goBack}>Voltar</button>
    </div>   
    )
    

}
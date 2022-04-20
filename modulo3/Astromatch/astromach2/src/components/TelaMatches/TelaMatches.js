import React from "react";
import axios from "axios"
import { useState } from "react";

export default function TelaMatches(props){
    
    const [matches, setMatches] = useState([])

    const getMatches = ()=>{
        const header ={
            headers: {}
        }

        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yasmin-silva/matches` , header)
        .then((res)=>{
            setMatches(res.data.matches)
        })
        .catch((err)=>{
            alert("Ocorreu um erro tente novamente!")
        })

    }

    const cleanMatches = ()=>{
        const header ={
            headers:{'Content-Type': 'application/json'}
        }

        axios
        .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yasmin-silva/clear`)
        .then((res)=>{
            alert("Os matches foram deletado com sucesso!")
            getMatches()
        })
        .catch((err)=>{
            alert("Ocorreu um erro tente novamente!")
        })
    }

    // const listaDeMatches = matches.map((list)=>{
    //     return(
    //         <d
    //     )
    // })

    return(
        <div>
            
        </div>
    )
}
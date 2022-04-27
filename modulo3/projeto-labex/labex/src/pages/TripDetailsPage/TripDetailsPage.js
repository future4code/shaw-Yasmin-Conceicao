//para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para  ela

import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/baseurl"
import { useToken } from "../../hooks/useToken"
import { useVerificaToken } from "../../hooks/useVerificaToken"



export default function TripDetailsPage(){
    useVerificaToken()

    const params = useParams()
    const authorization = useToken()

    useEffect(()=>{
      axios.get(`${BASE_URL}/trip/${params.id}`,authorization)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err)=>{
        console('deu erro',err.response)
      })
    },[])
    
    return(
      <div>
        <h1>Eu sou o  TripDetailsPage</h1>
    </div>  
    )
    
}
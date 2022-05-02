//para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para  ela

import { Button, Container, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/baseurl"
import { useToken } from "../../hooks/useToken"
import { useVerificaToken } from "../../hooks/useVerificaToken"


export default function TripDetailsPage(){
    useVerificaToken()

    const navigate = useNavigate()

    const [list, setlist] = useState({})
    const [candidates, setCandidates] = useState([{}])
    const [aprovedCandidates,  setAprovedCandidates] = useState([{}])
    
    const params = useParams()
    const authorization = useToken()

    useEffect(()=>{
      getDetailList()
      getAprovedList()
      getCandidates()

    },[])

    const getDetailList = () =>{

      axios.get(`${BASE_URL}/trip/${params.id}`,authorization)
      .then((res)=>{
        console.log(res.data)
        setlist(res.data.trip)
      })
      .catch((err)=>{
        console('deu erro',err.response)
      })
    

    }


    const getCandidates = () =>{
      axios.get(`${BASE_URL}/trip/${params.id}`, authorization)
      .then((res)=>{
        setCandidates(res.data.trip.candidates)
      })
      .catch((err)=>{
        alert(err.response)
      })
    }


    const getAprovedList = () =>{
      axios.get(`${BASE_URL}/trip/${params.id}`, authorization)
      .then((res)=>{
        setAprovedCandidates(res.data.trip.approved)
      })
      .catch((err)=>{
        alert('erro, tente novamente', err.response)
      })
    }
      
    const aprove = (id) =>{
      const body ={
        approve:true
      }

      axios.put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`, body, authorization)
      .then((res)=>{
      alert("Usuário aprovado com sucesso!")
      getAprovedList()
      getCandidates()
      })
      .catch((err)=>{
        alert("erro, tente novamente", err.response)
      })
    }

    const reproved = (id) =>{
      const body ={
        approve: false
      }

      axios.put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide` , body, authorization)
      .then((res)=>{
        alert(" O Usuário foi rejeitado com sucesso!", res.data)
        getAprovedList()
        getCandidates()
      })
      .catch((err)=>{
        alert(err.response)
      })
    }

    const mapeiaListaDeAprovados = aprovedCandidates.map((trip)=>{
      return(
        <div key={trip.id} >
          <p><strong>Nome: {trip.name}</strong></p>
        </div>
      )
    })

    const mapeiaListaDeCandidatos = candidates.map((trip)=>{
      return(
        <div key={trip.id}>
          <p><strong>Nome:</strong>{trip.name}</p>
          <p><strong>Profissão:</strong>{trip.profession}</p>
          <p><strong>Idade:</strong>{trip.age}</p>
          <p><strong>País:</strong>{trip.country}</p>
          <p><strong>texto de candidatura:</strong>{trip.applicationText}</p>
        <div>
          <Button variant={'outlined'} onClick={() => aprove(trip.id)}>aprovar</Button>

          <Button variant={'outlined'} onClick={() => reproved(trip.id)}>reprovar</Button>
        </div>

        </div>

        
         
        
      )
    })

     
    const goBack = () =>{
      navigate(-1)
   }


    return(
      <div>
        <h1>detalhes da viagem</h1>
        <Container>
         <Typography><strong>Nome:</strong>{list.name}</Typography>
         <Typography><strong>Descrição:</strong>{list.descriTypographytion}</Typography>
         <Typography><strong>Typographylaneta:</strong>{list.Typographylanet}</Typography>
         <Typography><strong>duracao:</strong>{list.durationInDays}</Typography>
         <Typography><strong>data:</strong>{list.date}</Typography>
        </Container>

       {mapeiaListaDeAprovados }
       {mapeiaListaDeCandidatos}
        
       <Button variant={'contained'} color={'secondary'} onClick={goBack}>Voltar</Button>
        
      </div>  
    )
    
}
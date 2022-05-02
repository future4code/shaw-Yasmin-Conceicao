//formulário para o administrador criar uma nova viagem

import { Button, FormControl, Input, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/baseurl";
import { useToken } from "../../hooks/useToken";
import { useVerificaToken } from "../../hooks/useVerificaToken";
import { ContainerCreat } from "./styled";


export default function CreateTripPage(){
    useVerificaToken()
    const authorization = useToken()

    const [nome, setNome] = useState('')
    const [planeta, setPlaneta] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')
    const [duracao, setDuracao] = useState('')
     
    const navigate = useNavigate()


    const createTrip = () =>{
        const body ={
            name:nome,
            planet:planeta,
            date: data,
            description:descricao,
            durationInDays: duracao
        }

        axios.post(`${BASE_URL}/trips`, body, authorization)
        .then((res) =>{
            alert('Viagem criada com sucesso!')
        })
        .catch((err) =>{
            alert('erro, tente novamente!', err.response)
        })

        setNome("")
        setDescricao("")
        setData("")
        setPlaneta("")
        setDuracao("")
    }


    const onChangeNome = (ev) =>{
        setNome(ev.target.value)
    }
    const onChangePlaneta = (ev) =>{
        setPlaneta(ev.target.value)
    }
    const onChangeData = (ev) =>{
        setData(ev.target.value)
    }
    const onChangeDescricao = (ev) =>{
        setDescricao(ev.target.value)
    }
    const onChangeDuracao = (ev) =>{
        setDuracao(ev.target.value)
    }

    const goBack = (navigate) =>{
        navigate(-1)
    }


    return(
    <div>
        <ContainerCreat>

        
        <Typography variant="h1" align={'center'} gutterBottom>LabeX</Typography>

        <Input placeholder="Nome" onChange={onChangeNome} value={nome} color="secondary"/>

        <Input onChange={onChangeDescricao} placeholder="Descrição" value={descricao} color="secondary"/>

        <Input onChange={onChangeDuracao} placeholder="Duração em dias" value={duracao} color="secondary"/>
        
        <FormControl variant="standard" sx={{ m: -0.10, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Escolha um planeta</InputLabel>
        <Select onChange={onChangePlaneta} value={planeta}>

        <MenuItem value="">
          
        
        </MenuItem>
            

            <MenuItem  value="Sol">Sol</MenuItem>
            <MenuItem  value="Venus">Venus</MenuItem>
            <MenuItem  value="Mercúrio">Mercúrio</MenuItem>
            <MenuItem  value="Plutão">Plutão</MenuItem>
            <MenuItem  value="Saturno">Saturno</MenuItem>
            <MenuItem  value="Marte">Marte</MenuItem>
            <MenuItem  value="Urano">Urano</MenuItem>
       
        </Select>
        </FormControl>

           <input
              placeholder="Prazo do serviço"
              type="date"
              onChange={onChangeData}
              value={data}
            />
        

        

           

            
            <Button variant={'contained'} color={'primary'} onClick={createTrip}>Criar</Button>
            <Button variant={'outlined'} color={'secondary'} onClick={() => goBack(navigate)}>voltar</Button>
           

            </ContainerCreat>
    </div>

    )
   
}
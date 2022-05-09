//para fazermos login como administrador

import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../../constants/baseurl"
import { Navigate, useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { Login } from "./styled";

export default function LoginPage(){

 const navigate = useNavigate()

 const gotoAdminHomePage = (navigate) =>{
    navigate('/admin/trips/list')
 }

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const onChangeEmail = (ev) =>{
        setEmail(ev.target.value)
        
    }

    const onChangeSenha = (ev) =>{
        setSenha(ev.target.value)
       
    }

    const CadastraLogin = () =>{
        const body ={
            email: email,
            password: senha
        }

        axios.post(`${BASE_URL}/login`, body)
        
         .then((res)=>{
             
             console.log(res.data.token)
             alert( "Login feito com sucesso")
            localStorage.setItem("token", res.data.token)
            gotoAdminHomePage(navigate)
            console.log("erro carai")
         })
         .catch((err)=>{
             alert( 'deu errado', err.response)
         })
    }

    
    const goBack = () =>{
       navigate('/')
    }

    

    return(
       <div>
         <Typography variant="h1" align={'center'} gutterBottom>Login</Typography>

       <Login>
        <TextField label={'Email'} type="Email" value={email}  onChange={onChangeEmail}/>

        <TextField label={'Senha'} type="password" value={senha}  onChange={onChangeSenha}/>

        <Button onClick={CadastraLogin} variant={'contained'} color={'secondary'}>Enviar</Button>
         
   
        
       
        

        <Button variant={'outlined'} color={'primary'} onClick={goBack}>Voltar</Button> 
       </Login>
        
    </div>  
    )
   
}
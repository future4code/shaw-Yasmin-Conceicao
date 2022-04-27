//para fazermos login como administrador

import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../../constants/baseurl"
import { Navigate,useNavigate } from "react-router-dom";

export default function LoginPage(){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const onChangeEmail = (ev) =>{
        setEmail(ev.target.value)
        
    }

    const onChangeSenha = (ev) =>{
        setSenha(ev.target.value)
       
    }

    const CadastraLogin = () =>{
        console.log(email, senha)
        const body ={
            email: email,
            password: senha
        }

        axios.post(`${BASE_URL}/login`, body)
        
         .then((res)=>{
             console.log( "deu certo",res.data.token)
             localStorage.setItem("token", res.data.token)
         })
         .catch((err)=>{
             alert( 'deu errado', err.response)
         })
    }

    
    const goBack = () =>{
        navigate(-1)
    }

    

    return(
       <div>
        <h1>Eu sou o  LoginPage</h1>

        <input placeholder="Email" type="Email" value={email}  onChange={onChangeEmail}/>

        <input placeholder="Senha" type="senha" value={senha}  onChange={onChangeSenha}/>

        <button onClick={CadastraLogin}> enviar</button>

        <button onClick={goBack}>Voltar</button>
    </div>  
    )
   
}
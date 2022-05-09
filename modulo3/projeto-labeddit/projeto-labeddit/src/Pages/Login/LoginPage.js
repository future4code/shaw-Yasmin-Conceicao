import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../../contants/Baseurl"
import { useForm } from "../../hooks/useForm";


export default function LoginPage () {
  const navigate = useNavigate()

  const goToFeed = (navigate) =>{
    navigate('/feed')
  }

  const [form, onChange] = useForm({email:"", senha:""})


    const Login = () =>{
      const body = {
        email: form.email,
        password: form.senha
      }

      axios.post(`${BASE_URL}/users/login`, body)
      .then((res)=>{
        localStorage.setItem("token", res.data.token)
        alert("Login feito com sucesso!")
        goToFeed(navigate)
      })
      .catch((err)=>{
        alert("Erro, tente novamente", err.response)
      })

    }

  return(
   <div>
    <h1>LoginPage</h1>

    <input placeholder="Nome" value={form.email} name="email"  onChange={onChange} />

    <input type="password" placeholder="Senha" name="senha" value={form.senha}  onChange={onChange}/>

    <button onClick={() => {Login()}}>Continuar</button>

    <button onClick={() => {navigate("/cadastro")}}>Crie uma conta</button>

   </div>
  )
}
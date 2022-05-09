import { Card, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardFilho } from "./styled";
import TextField from '@mui/material/TextField'

export default function Cadastro () {
   const navigate = useNavigate()

  return(
   <div>
     

     <header>oi</header>

    <CardFilho>

     
    
     <Typography variant="h2" textAlign={"center"}>Cadastro</Typography>

     
     <input placeholder="Nome de usuário" />

     <input type="email"  placeholder="E-mail" />

     {/* <input
      pattern={"^.{8,30}"}
      title={"A precisa precisa contem no mínimo 8 caracteres e no máximo 30"} 
      type="password" 
      placeholder="Senha" /> */}

        <TextField
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          size="small"
          pattern={"^.{8,30}"}
          title={"A precisa precisa contem no mínimo 8 caracteres e no máximo 30"} 

          sx={{margin:"10px", width:"120%", height:"50%"}}
        />

       <p>Ao continuar, Você concorda com os nossos termos de uso</p>
       <input type="checkbox" required/> Concordo Com os termos de uso
      
     <button onClick={() => {navigate("/feed")}}>enviar</button>
     
     

     </CardFilho>
   </div>
  )
}
import React, { useState } from "react";
import Logo from "../../Img/Logo_FutureEats.svg"
import { ButtonStyled, ImgLogo, InputContainer, MainContainer, OutlinedInputstyled, Pstyled, TextFieldStyled, TextFooter, TitleConatiner, TitleFooter } from "./styled";
import {useForm} from "../../Hooks/UseForm"
import axios from "axios";
import { BASE_URL } from "../../Constants/BaseUrl";
import  {goToFeed, goToSignup}  from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom";

export default function Login () {

    const navigate = useNavigate()
    const [form, onChange] = useForm({email:"", password:""})
    const [errEmail, setErrEmail] = useState("")
    const [errPassword, setErrPassword] = useState("")
    const [checkErrEmail, setCheckErrEmail] = useState(false)
    const [checkErrPassword, setCheckErrPassword] = useState(false)

      const login = async () => {

        const body = {
          email: form.email,
          password: form.password
        }

       await axios.post(`${BASE_URL}/login`, body)
        
        .then((res) => {
          setErrEmail("")
          setErrPassword("")
          setCheckErrEmail(false)
          setCheckErrPassword(false)
          localStorage.setItem("token", res.data.token)
          goToFeed(navigate)

        })

        .catch((err) => {
          if(err.response.data.message.includes("Senha incorreta")){
            setErrPassword(err.response.data.message)
            setCheckErrPassword(true)

          }else{
            setErrEmail(err.response.data.message)
            setCheckErrEmail(true)
          }
          console.log(err.response.data.message)

        }) 
        }
    

    return(
        <MainContainer>

            <ImgLogo src={Logo}/>
            
            <TitleConatiner>
               <Pstyled>Entrar</Pstyled>  
            </TitleConatiner>
           
           
            <InputContainer component={"form"} onSubmit={login}>
            
            <TextFieldStyled 
                error={checkErrEmail}
                helperText={checkErrEmail ? errEmail: ""}
                label="Email"
                variant="outlined"
                placeholder="email@email.com"
                type="email"
                value={form.email}
                onChange={onChange}
                name="email"
            />

            
           <TextFieldStyled
                error={checkErrPassword}
                helperText={checkErrPassword ? errPassword : ""}
                label="Senha"
                variant="outlined"
                placeholder="Minimo 6 caracteres"
                onChange={onChange}
                value={form.password}
                name="password" 
             />

            <ButtonStyled onClick={login}>Entrar</ButtonStyled>

            </InputContainer>


            <TitleFooter>
             <h4 onClick={() => goToSignup(navigate)}>Não possui cadastro? clique aqui.</h4>   
            </TitleFooter>
            
        
        </MainContainer>
    )
}


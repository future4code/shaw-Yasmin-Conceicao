import React from "react";
import Etapa2 from "./Etapa2";
import styled from "styled-components";

export default class Etapa1  extends React.Component{

    render(){
       
        return(
            <div>
                <h2>Etapa 1 - Dados Gerais</h2>

                <p>1. Qual o seu nome?</p>
                <input></input>

                <p>2. Qual sua idade?</p>
                <input></input>

                <p>3. Qual seu email?</p>
                <input></input>

                <p>4. Qual a sua escolaridade?</p>
                <select> 
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
                
                
              
               
            </div>
        )
    }


}

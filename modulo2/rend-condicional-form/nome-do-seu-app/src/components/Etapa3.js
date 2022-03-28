import React from "react";
import styled from "styled-components";

export default class Etapa3  extends React.Component{
    render(){

        return(
            <div>
                <h2>Etapa 3 - Informações Gerais De Ensino</h2>

                <p> 7. Por que você não terminou um curso de graduação ?</p>
                <input></input>

                <p> 8. Você fez algum curso complementar?</p>
                <select> 
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                   
                </select>
                


            </div>
        )
    }



}
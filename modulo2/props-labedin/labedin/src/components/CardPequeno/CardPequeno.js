import React from 'react';
import styled from 'styled-components';



const CardPequenoContainer= styled.div`
display: flex;
align-items: center;
flex-direction:row;
border: 1px solid black;
margin-top: 10px;



> img{
    display: flex;
    width: 30px;
    align-items: center;
}

  

`


function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <img src={ props.imagem } />
            
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            
        </CardPequenoContainer>
    )
}

export default CardPequeno;
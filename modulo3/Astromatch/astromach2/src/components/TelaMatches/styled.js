import styled from "styled-components";

export const CardDad= styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #DCDCDC;
`

export const CardSon= styled.div`
display: flex;
align-items: center;
flex-direction: row;
height: 600px;
width: 400px;
border: solid 1px #708090;
border-radius: 15px;
display: grid;
grid-template-rows: 10% 80% 10%;
background-color: white;



header{
grid-row: 1/2 ;
align-items: center;
width: 100%;
display: grid;
grid-template-columns: 20% 80%;
border-bottom: 1px solid #DCDCDC;

}


`

export const Itens = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`

export const Main = styled.div`
display: flex;
margin-bottom: 10px;
width: 100%;
align-items: center;
cursor: pointer;
transition: 0.2s ease-in-out;
font-family:  'Work Sans', sans-serif;





:hover{
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
    background-color: #CDC9C9;
    border-radius: 12px;
} 

img{
    height: 60px;
    width: 60px;
    border-radius: 50px;
    margin: 10px;
    
   
}

`

export const LogoPage = styled.img`
height: 40px;
margin-left: 30px;
`
export const IconeSeta = styled.img`
display: flex;
height: 28px;
width: 28px;


:hover{
    transform: scale(1.2);
   
}  

`


export const Lista = styled.div`
display: flex;
flex-direction: column;
grid-row: 2/3;

`

export const Botao = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-top: 1px solid #DCDCDC;
border-radius: 6px;


button{
    border: none;
    border-radius: 6px;
    background-color: white;
    padding: 9px;
    text-align: center;

    
:hover{
    transform: scale(1.2);
    background-color: #FC3C80;
    transition: 0.2s ease-in-out;
}  
}
`
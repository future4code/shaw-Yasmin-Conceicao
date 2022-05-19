import styled from "styled-components";



export const CardPai = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #f5f5f5;
`

export const CardFilho = styled.div`

justify-content: center;
align-items: center;
flex-direction: column;
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
grid-template-columns: 80% 20%;
border-bottom: 1px solid #DCDCDC;

div{
    display: flex;
    justify-content: center;
    align-items: center;
}

}




`

export const ImagemCard = styled.img`
height: 400px;
width: 350px;
border-radius: 10px;
background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
flex-wrap: wrap;
    
  

`

export const Logo = styled.img`
height: 46px;
margin-left: 80px;

`
export const IconeMatch = styled.img`
display: flex;
height: 36px;
margin-left: 40px;


:hover{
    transform: rotate(180deg);
   
}  
`

export const Main = styled.div`
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
grid-row: 2/3;
text-align: center;
font-family: Arial, sans-serif;
color: white;
text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px black;
font-size: 18px;

`

export const Botoes = styled.div`
display: flex;
grid-row: 3/4;
justify-content: space-around;
margin-bottom: 25px;

img{
  transition-duration: 0.2s;
   transition: all 0.3s cubic-bezier(0.680, -0.550, 0.265, 1.550);;

:hover{
    
    transform: scale(1.2);
}  
}


`

export const Descricao = styled.div`
padding: 18px;
position: absolute;
margin-top: 250px;
color:white;


`
export const Bio = styled.div`
margin-top: 330px;
position: absolute;
color: white;


width: 22%;

`


import React, {useState, useEffect} from "react";
import axios from "axios";
import cancelar from "../../imagens/cancelar.png"
import heart from "../../imagens/heart.png"
import like from "../../imagens/like.png"
import seta from "../../imagens/seta.png"
// import { CardPai, CardFilho} from "./styled";




export default  function TelaInicial(props){

    const [perfil, setPerfil] =useState([])

    const getPerfil = ()=>{
        const header = {
            headers:{}
        }

        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yasmin-silva/person` , header)
        .then((res)=>{
            setPerfil(res.data.profile)
        })
        .catch((err)=>{
            alert("Ocorreu um erro, tente novamente!")
        })
        
    }

    const choosePerson = ()=>{
        const header = {
            headers:{'Content-Type': 'application/json'}
        }
        const body ={
            id: perfil.id,
            choice: true
        }

        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yasmin-silva/choose-person` , body, header)
        .then((res)=>{
            if (res.data.isMatch){
                alert(`Você deu Match com ${perfil.name}!`)
                getPerfil()
            }
        })
        .catch((err)=>{
            alert("Ocorreu um erro, Tente novamente!")
        })
    }

    useEffect(()=>{
        getPerfil()
    },[])

return(
    <div>
        <div>

    <div>
        <button onClick={props.irParaTelaMatches}>
            <img src={heart}  alt="ícone ir para Matches"/>
        </button>
    </div>

       

    <div>
       
       <img src={perfil.photo}  alt="Foto de perfil" height={300} width={200}/> 
        
    </div>
        

       <div>
           
        <div>
        <p>{perfil.name} {perfil.age} anos</p> 
        </div>

        <div>
        <p>{perfil.bio}</p>  
        </div>
        
      </div>


   <div>
      <button onClick={getPerfil}>
       <img src={cancelar} alt="ícone de cancelar" height={300} width={200} />
      </button>
   </div>

   <div>
      <button onClick={()=> {choosePerson()}}>
       <img src={like} alt="ícone de Match" height={300} width={200} />
      </button>
   </div>

   
    
      
              
       
        
        
    </div>
    </div>
)
}
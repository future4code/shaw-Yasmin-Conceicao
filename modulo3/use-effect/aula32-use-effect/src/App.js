import React, {useEffect, useState} from "react";
import axios from "axios";
import "./styles.css"
import PokeCard from "./components/PokeCard/PokeCard";


export default function App(){
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")



  useEffect(()=>{

    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((res) =>{
      setPokeList(res.data.results)
    })
    .catch((err)=>{
      alert(err)
    })

  },[])


  const changePokeName = (ev)=>{
    setPokeName(ev.target.value)
  }



  return(
    <div>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        
        {pokeList.map(pokemon =>{
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      
      {pokeName && <PokeCard pokemon={pokeName}/>}
    </div>
  )
}
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function PokeCard(props){
    const [pokemon, setPokemon] = useState({})
   

  const pegaPokemon = (pokeName)=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((res)=>{
        setPokemon(res.data)
    })
    .catch((err)=>{
        alert(err)
    })
   }

 useEffect(()=>{
     pegaPokemon(props.pokemon)
 },[props.pokemon])

 

    return(
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} kg</p>

            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            )}

        </div>
    )
       
    
}
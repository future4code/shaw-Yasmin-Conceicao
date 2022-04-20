import React, {useState} from "react";
import TelaInicial from "./components/TelaInicial/TelaInial"
import TelaMatches from "./components/TelaMatches/TelaMatches";


export default function App(){

  const [telaAtual, setTelaAtual] = useState("inicial")

  const irParaTelaInicial = ()=>{
    setTelaAtual("inicial")
  }

  const irParaTelaMatches = ()=>{
    setTelaAtual("matches")
  }

  const escolherTela = ()=>{
    switch(telaAtual){
      case "inicial":
        return <TelaInicial irParaTelaInicial={irParaTelaMatches} />
        case "matches":
          return <TelaMatches irParaTelaInicial={irParaTelaInicial} />
          default:
            return <TelaInicial irParaTelaMatches={irParaTelaMatches} />
    }
  }

  return(
    <div>
      {escolherTela()}
     
    </div>
  )
}
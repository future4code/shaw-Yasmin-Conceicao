import React from "react";
import AcessaPlayList from "./components/AcessaPlayList"
import CriaPlayList from "./components/CriaPlayList";


export  default class App extends React.Component{
  state = {
    telaInicial : "criaPlaylist"
  }


  escolheTela = () =>{
    switch(this.state.telaInicial){
      case "criaPlaylist":
        return <CriaPlayList irParaAcessaPlayList = {this.irParaAcessaPlayList}/>
      case "acessaList": 
        return <AcessaPlayList irParaCriarPlayList = {this.irParaCriarPlayList}/>
        default:
          return <AcessaPlayList />
    }
  }

  irParaAcessaPlayList = () =>{
    this.setState({telaInicial: "criaPlayList"})
  }

  irParaCriarPlayList = () => {
    this.setState({telaInicial: "acessaList"})
  }

  render(){
    return (
      <div>
       {this.escolheTela()}
      </div>
    )
  }
}

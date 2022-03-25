import React from "react";
import styledComponents from "styled-components";



const MainContainer = styledComponents.div`
 
`

class App extends React.Component{
  state = {

    conversas: [
      {
        nome:"",
        assunto:"",
      },
    ],

    valorNome: "",
    valorAssunto: "",

  }


adicionaMensagem = () => {

  const novaMensagem = {

    nome:this.state.valorNome,

    assunto: this.state.valorAssunto
  }


const novoMensagem = [...this.state.conversas,novaMensagem];

this.setState({conversas:novoMensagem })
console.log(novoMensagem)
}


onChangeValorNome = (Event) => {
  this.setState({valorNome: Event.target.value})
}

onChangeValorAssunto = (Event) => {
  this.setState({valorAssunto: Event.target.value})

}


render(){
  const listaDeComponentes = this.state.conversas.map((conversa) => {
    return(
      <p>
      {conversa.nome} - {conversa.assunto}
      
      

      </p>
    );
  });



return(
<MainContainer>
        <main>
          <input
          onChange={this.onChangeValorNome}
          value={this.state.valorNome}
          placeholder={"nome"}
          />

         <input
          onChange={this.onChangeValorAssunto}
          value={this.state.valorAssunto}
          placeholder={"mensagem"}
          />

        
        <button onClick ={this.adicionaMensagem}>enviar</button>

        </main>

        {listaDeComponentes}


      </MainContainer>
);
}
}

export default App;
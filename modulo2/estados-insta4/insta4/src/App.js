import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

 const Postagem = styled.div`
 border: 1px solid black;
 width: 100px;
 height:20%;
 margin-bottom: 10px;
`

class App extends React.Component {
  state ={
  
    pessoas:[

      {
        nomeUsuario:"Paulinha",
        fotoUsuario:"https://picsum.photos/50/50?a=${this.numeroDaImagem={3}}",
        fotoPost:"https://picsum.photos/200/150?a=${this.numeroDaImagem={2}}",
      },
      {
        nomeUsuario:"Yasmin",
        fotoUsuario:"https://picsum.photos/50/50?a=${this.numeroDaImagem={2}}",
        fotoPost:"https://picsum.photos/200/150?a=${this.numeroDaImagem={4}}",
      },
      {
        nomeUsuario:"Paulo",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150",
      }
      

    ],

    valorInputPessoa:"",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",

  }

  


  onChangeNomeUsuario = (event) => {
    this.setState({ valorInputPessoa:event.target.value });
  };

  onChangeFotoUsuario = (event) => {
    this.setState({   valorInputFotoUsuario:event.target.value });
  };

  onChangeFotoPost = (event) => {
    this.setState({  valorInputFotoPost: event.target.value });
  };

  onClickPost = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputPessoa,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    
    const novoArray = [...this.state.pessoas];
    novoArray.push(novaPostagem);

    this.setState({ pessoas: novoArray });
  };

  

  render() {

    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      console.log(pessoa)
      return (
        <Post
        nomeUsuario={pessoa.nomeUsuario}
        fotoUsuario={pessoa.fotoUsuario}
        fotoPost={pessoa.fotoPost}
      />
      
      );

    });
    return (
      <MainContainer>

        <Postagem>

          <label>nomeUsuario</label>
          <input
          onChange={this.onChangeNomeUsuario}
          value={this.state.valorInputPessoa}

          />


          <label>fotoUsuario</label>
         <input

         onChange={this.onChangeFotoUsuario} 
         value={this.state.valorInputFotoUsuario}

          />


           <label>fotoPost</label>
          <input
           onChange={this.onChangeFotoPost} 
           value={this.state.valorInputFotoPost}
          />

          <button onClick={this.onClickPost}>clique aqui</button> 

          
          

        </Postagem>



         {listaDeComponentes}


      </MainContainer>
    );
  }
}

export default App;

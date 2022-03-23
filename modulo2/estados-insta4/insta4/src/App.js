import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=${this.numeroDaImagem={3}}'}
          fotoPost={'https://picsum.photos/200/150?a=${this.numeroDaImagem={2}}'}
        />
      
      <Post
          nomeUsuario={'Yasmin'}
          fotoUsuario={'https://picsum.photos/50/50?a=${this.numeroDaImagem={2}}'}
          fotoPost={'https://picsum.photos/200/150?a=${this.numeroDaImagem={4}}'}
        />
        
        <Post
          nomeUsuario={'Paulo'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

      </MainContainer>
    );
  }
}

export default App;

import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";



const Text = styled.div`
display: flex;
margin-top: 20px;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
padding-top: 10px


`

const MudaButton = styled.button`
 margin-top: 20px;
 align-items: center;
 background-color: salmon;

`



class App extends React.Component {
  state = {
    pagina: 1,
  };

  irParaEtapa2 = () => {
    this.setState({ pagina: this.state.pagina + 1 });
  };

  render() {
    let secao;
    switch (this.state.pagina) {
      case 1:
        secao = <Etapa1 />;
        break;

      case 2:
        secao = <Etapa2 />;
        break;
      case 3:
        secao = <Etapa3 />;
        break;
      case 4:
        secao = <Final />;
        break;
      default:
        break;
    }

    return (
      <Text>
        {secao}
        
        <MudaButton onClick={this.irParaEtapa2}>Próxima Etapa</MudaButton>
      </Text>
    );
  }
}

export default App;

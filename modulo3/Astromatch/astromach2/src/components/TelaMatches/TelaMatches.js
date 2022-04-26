import React from "react";
import axios from "axios";
import { useState } from "react";
import seta from "../../imagens/seta.png";
import { useEffect } from "react";
import {
  CardDad,
  CardSon,
  Itens,
  Main,
  LogoPage,
  IconeSeta,
  Lista,
  Botao
} from "./styled";
import logoCerto from "../../imagens/logoCerto.png";

export default function TelaMatches(props) {
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    const header = {
      headers: {},
    };

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yasmin-la/matches`,
        header
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        alert("Ocorreu um erro tente novamente!");
      });
  };

  const cleanMatches = () => {
    const header = {
      headers: { "Content-Type": "application/json" },
    };

    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yasmin-la/clear`,
        header
      )
      .then((res) => {
        alert("Os matches foram deletado com sucesso!");
        getMatches();
      })
      .catch((err) => {
        alert("Ocorreu um erro tente novamente!");
      });
  };

  useEffect(() => {
    getMatches();
  }, []);

  const listaDeMatches = matches.map((list) => {
    return (
      <Main key={list.id}>
        <img src={list.photo} alt="Foto Match" />
        <p>{list.name}</p>
      </Main>
    );
  });

  return (
    <CardDad>
      <CardSon>
        <header>
          <Itens onClick={props.irParaTelaInicial}>
            <IconeSeta src={seta} alt="icone voltar" height={50} width={50} />
          </Itens>
          <LogoPage src={logoCerto} alt="Logo" />
        </header>

        <Lista>{listaDeMatches}</Lista>

        <Botao>
          <button onClick={cleanMatches}>Limpar Matches</button>
        </Botao>
      </CardSon>
    </CardDad>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import cancelar from "../../imagens/cancelar.png";
import heart from "../../imagens/heart.png";
import like from "../../imagens/like.png";
import logoCerto from "../../imagens/logoCerto.png";
import {
  CardPai,
  CardFilho,
  ImagemCard,
  Logo,
  IconeMatch,
  Main,
  Botoes,
  Descricao,
  Bio,
} from "./styled";

export default function TelaInicial(props) {
  const [perfil, setPerfil] = useState([]);

  const getPerfil = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yasmin-la/person`
      )
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente!");
      });
  };

  const choosePerson = () => {
    const body = {
      id: perfil.id,
      choice: true,
    };

    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yasmin-la/choose-person`,
        body
      )
      .then((res) => {
        if (res.data.isMatch) {
          alert(`Você deu Match com ${perfil.name}!`);
          getPerfil();
        }
      })
      .catch((err) => {
        alert("Ocorreu um erro, Tente novamente!");
      });
  };

  useEffect(() => {
    getPerfil();
  }, []);

  return (
    <CardPai>
      <CardFilho>
        <header>
          <Logo src={logoCerto} alt="Logo" />

          <div onClick={props.irParaTelaMatches}>
            <IconeMatch src={heart} alt="ícone ir para Matches" />
          </div>
        </header>

        <Main>
          <ImagemCard src={perfil && perfil.photo} alt="Foto de perfil" />
          <Descricao>
            {perfil && perfil.name}, {perfil && perfil.age}{" "}
          </Descricao>
          <Bio>{perfil.bio}</Bio>
        </Main>

        <Botoes>
          <div>
            <div onClick={getPerfil}>
              <img
                src={cancelar}
                alt="ícone de cancelar"
                height={60}
                width={60}
              />
            </div>
          </div>

          <div>
            <div
              onClick={() => {
                choosePerson();
              }}
            >
              <img src={like} alt="ícone de Match" height={60} width={60} />
            </div>
          </div>
        </Botoes>
      </CardFilho>
    </CardPai>
  );
}

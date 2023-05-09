import React, { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const Adicionar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const Diminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <h2> 0 fixo </h2>
      <h2> {contador} </h2>

      {/* Função dentro do botão */}
      <button
        onClick={() => {
          setContador(contador < 10 ? contador + 1 : contador);
        }}
      >
        {" "}
        +{" "}
      </button>

      <button
        onClick={() => {
          setContador(contador > 0 ? contador - 1 : contador);
        }}
      >
        {" "}
        -{" "}
      </button>

      {/* Função externa */}
      <button
        onClick={() => {
          Adicionar();
        }}
      >
        {" "}
        + parte 2{" "}
      </button>

      <button
        onClick={() => {
          Diminuir();
        }}
      >
        {" "}
        - parte 2{" "}
      </button>
    </>
  );
}

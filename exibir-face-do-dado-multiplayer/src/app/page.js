"use client"

import { useState } from "react";
import Dado from "./componentes/Dado/Dado";
import ExibirVencedor from "./componentes/ExibirVencedor/ExibirVencedor";

export default function Home() {
  const [faceDoDadoUm, setFaceDoDadoUm] = useState(0);
  const [faceDoDadoDois, setFaceDoDadoDois] = useState(0);
  const [rodada, setRodada] = useState(1);
  const [botaoDadoUmAtivo, setBotaoDadoUmAtivo] = useState(true);
  const [somatorioJogadorUm, setSomatorioJogadorUm] = useState(0);
  const [somatorioJogadorDois, setSomatorioJogadorDois] = useState(0);

  const calcularVencedor = (valorJogadorUm, valorJogadorDois) => {
    if (valorJogadorUm > valorJogadorDois) {
      setSomatorioJogadorUm(valorAnterior => valorAnterior + 1);
    } else if (valorJogadorUm < valorJogadorDois) {
      setSomatorioJogadorDois(valorAnterior => valorAnterior + 1);
    }
}

  const gerarFaceDadoUm = () => {
    let novoValorFace = Math.floor(Math.random() * 6) + 1;

    setFaceDoDadoUm(novoValorFace);
    setBotaoDadoUmAtivo(valorAnterior => !valorAnterior);
  }

  const gerarFaceDadoDois = () => {
    let novoValorFace = Math.floor(Math.random() * 6) + 1;

    setFaceDoDadoDois(novoValorFace);
    setBotaoDadoUmAtivo(valorAnterior => !valorAnterior);
    setRodada(valorAnterior => valorAnterior + 1);
    calcularVencedor(faceDoDadoUm, novoValorFace);
  }

  return (
    <div className="text-black">
      <main className="flex flex-col items-center justify-center gap-4 h-screen w-screen">
        <header>
          <h1 className="text-3xl font-bold text-center">Jogo do dado</h1>
          <h2 className="text-center text-2xl p-4">Rodada atual - {rodada === 6 ? 5 : rodada}</h2>
        </header>
        <div className="flex gap-24">
          <div className="flex flex-col gap-8">
            <Dado valor={faceDoDadoUm} />
            <button
            onClick={gerarFaceDadoUm}
            className={`${botaoDadoUmAtivo === true && rodada !== 6 ? "bg-blue-300" :"bg-gray-300" } p-4 w-56 rounded-sm text-xl font-bold`}
            disabled={`${botaoDadoUmAtivo === true && rodada !== 6  ? "" : "disabled"}`}
            >Gerar Face</button>
          </div>
          <div className="flex flex-col gap-8">
            <Dado valor={faceDoDadoDois} />
            <button
              onClick={gerarFaceDadoDois}
              className={`${botaoDadoUmAtivo === false ? "bg-blue-300" :"bg-gray-300" } p-4 w-56 rounded-sm text-xl font-bold`}
              disabled={`${botaoDadoUmAtivo === false ? "" : "disabled"}`}
            >Gerar Face</button>
          </div>
        </div>
        <p>Clique no botão abaixo para gerar uma nova face</p>
        <p className="font-bold text-xl">Placar: {somatorioJogadorUm} x {somatorioJogadorDois}</p>
        
        {rodada === 6 && (
          <ExibirVencedor 
            somatorioJogadorUm={somatorioJogadorUm}
            somatorioJogadorDois={somatorioJogadorDois}
          />
        )}
      </main>
    </div>
  );
}

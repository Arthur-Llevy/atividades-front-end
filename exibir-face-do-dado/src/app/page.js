"use client"

import { useState } from "react";
import Dado from "./componentes/Dado/Dado";

export default function Home() {
  const [faceDoDado, setFaceDoDado] = useState(0);

  const gerarFace = () => {
    setFaceDoDado(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="text-black">
      <main className="flex flex-col items-center justify-center gap-4 h-screen w-screen">
        <header>
          <h1 className="text-3xl font-bold">Jogo do dado</h1>
        </header>
        <Dado valor={faceDoDado} />
        <p>Clique no botão abaixo para gerar uma nova face</p>
        <button
          onClick={gerarFace}
          className="bg-blue-300 p-4 w-56 rounded-sm text-xl font-bold"
        >Gerar Face</button>
      </main>
    </div>
  );
}

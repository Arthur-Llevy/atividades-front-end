import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center">
        <main>
          <header>
            <h1 className="text-center text-3xl font-bold p-4">Convert Now</h1>
          </header>
          <main className="mt-24 flex flex-col gap-8 text-center items-center">
            <p>Seja bem-vindo(a) ao Convert Now, faça de modo simples e rápido conversões de moedas, temperaturas e unidades de medida de comprimento.</p>
            <p>Acesse os conversores através dos links abaixo</p>
            <div className="flex items-center justify-center gap-4">
              <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72" href="/conversores/comprimento">Conversor de comprimento</Link>
              <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72" href="/conversores/moedas">Conversor de moedas</Link>
              <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72" href="/conversores/temperaturas">Conversor de temperaturas</Link>
            </div>
              <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72" href="/sobreMim/">Sobre mim</Link>
          </main>
        </main>
      </div>
    </>
  );
}

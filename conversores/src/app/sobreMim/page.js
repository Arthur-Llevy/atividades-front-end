import Image from "next/image";
import Link from "next/link";

export default function SobreMim() {
    return (
        <>
            <div className="flex flex-center items-center justify-center h-screen w-screen gap-4">
                <header className="p-4 flex flex-col bg-green-100 rounded-sm w-[400] h-[530] text-center justify-center items-center gap-4">
                    <Image src="/perfil.jpeg" alt="Imagem de perfil" width={200} height={200} className="rounded-full" />
                    <div className="flex flex-col gap-2">
                        <p>Olá, me chamo Arthur Levy, desenvolvedor Full Stack.</p>
                        <p>Técnico em Desenvolvimento de Sistemas pela Escola Técnica Ginásio Pernambucano.</p>
                        <p>Graduando em Sistemas para Internet e Egenharia da Computação pela Unicap e Poli-Upe, respectivamente.</p>
                    </div>
                </header>
                <main className="p-4 flex flex-col bg-green-100 rounded-sm w-[400] h-[530] text-center justify-center items-center gap-4">
                    <h1 className="text-3xl font-bold">Meios para contato</h1>
                    <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72 hover:bg-white hover:text-emerald-500 duration-300" href="mailto:arthur123lbv@gmail.com" target="_blank">E-mail</Link>
                    <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72 hover:bg-white hover:text-emerald-500 duration-300" href="https://www.linkedin.com/in/arthur-levy-bb0aa32a6/" target="_blank">LinkedIn</Link>
                    <Link className="bg-emerald-500 rounded-sm p-2 text-white font-bold w-72 hover:bg-white hover:text-emerald-500 duration-300" href="https://github.com/Arthur-Llevy" target="_blank">GitHub</Link>
                </main>
            </div>
        </>
    );
}
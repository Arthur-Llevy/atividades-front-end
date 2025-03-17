export default function ExibirVencedor(props) {
    const calcularVencedor = (valorJogadorUm, valorJogadorDois) => {
        if (valorJogadorUm > valorJogadorDois) {
          return 1;
        } else if (valorJogadorUm < valorJogadorDois) {
          return 2;
        }
        return 0;
    }

    if (calcularVencedor(props.somatorioJogadorUm, props.somatorioJogadorDois) === 1) {
        return (
            <>
                <h1 className="text-5xl text-bold p-8">Jogador 1 venceu</h1>
                <button 
                    onClick={() => window.location.reload()}
                    className="p-4 w-56 rounded-sm text-xl font-bold bg-blue-300"        
                >Jogar novamente</button>
            </>
        )
    } else if (calcularVencedor(props.somatorioJogadorUm, props.somatorioJogadorDois) === 2) {
        return (
            <>
                <h1 className="text-5xl text-bold p-8">Jogador 2 venceu</h1>
                <button 
                    onClick={() => window.location.reload()}
                    className="p-4 w-56 rounded-sm text-xl font-bold bg-blue-300"        
                >Jogar novamente</button>
            </>
        )
    } else {
        return (
            <>
                <h1 className="text-5xl text-bold p-8">Empate</h1>
                <button 
                    onClick={() => window.location.reload()}
                    className="p-4 w-56 rounded-sm text-xl font-bold bg-blue-300"    
                >Jogar novamente</button>
            </>
        )
    }
}
export default function Dado(props) {
    switch(props.valor) {
        case 1:
            return <img src="/face1.svg" alt="Face 1 do dado" />;
        case 2:
            return <img src="/face2.svg" alt="Face 2 do dado" />;
        case 3:
            return <img src="/face3.svg" alt="Face 3 do dado" />;
        case 4:
            return <img src="/face4.svg" alt="Face 4 do dado" />;
        case 5:
            return <img src="/face5.svg" alt="Face 5 do dado" />;
        case 6:
            return <img src="/face6.svg" alt="Face 6 do dado" />;
        default: 
            return <img src="/face-padrao.svg" alt="Face padrão" />;
    }   
}
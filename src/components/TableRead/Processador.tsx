import { TableRead, TableReadProps } from "../TableRead";

interface ProcessadorProps extends TableReadProps{
    soquete: string,
    nNucleos: number,
    nThreads: number,
    frequencia: number,
    freBoost: number,
    tdp: number,
    overClock: boolean,
    graficoIntregado: boolean,
    tipoMemoria: string
}

export function Processador(props:ProcessadorProps){
    return(
        <TableRead
        titulo="teste"
        cols={['teste']}
        nome="Xablau"
        fabricante="teste"
        modelo=""
        preco={1.2}
        status
        />


    )
}
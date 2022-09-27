import { TableRead } from "../TableRead"

export interface ProcessadorProps extends TableRead{
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
    return (
        <tr className="tr-shadow">
            <td>{props.nome}</td>
            <td>{props.fabricante}</td>
            <td className="desc">{props.modelo}</td>
            <td>{props.preco}</td>
            <td>{props.soquete}</td>
            <td>{props.nNucleos}</td>
            <td>{props.nThreads}</td>
            <td>{props.frequencia}</td>
            <td>{props.freBoost}</td>
            <td>{props.tdp}</td>
            <td>
            <span className="status--denied">{props.overClock}</span>
            </td>
            <td>
            <span className="status--denied">{props.graficoIntregado}</span>
            </td>
            <td>{props.tipoMemoria}</td>
            <td>
                <div className="table-data-feature">
                    <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                        <i className="zmdi zmdi-edit"></i>
                    </button>
                    <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                        <i className="zmdi zmdi-delete"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}
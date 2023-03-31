import { useState } from "react";
import { Componente } from "../../../TableRead"


interface ProcessadorProps extends Componente {
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

export function Processador(props: ProcessadorProps) {
    const [controls, setControls] = useState(false);
    const [editable, setEditable] = useState(false);

    function handleControls(typeControl: string) {

        if (typeControl == 'Edit') {
            setEditable(true)
        }
        setControls(true)

    };

    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap py-5">{props.id}</td>
            <td className="text-nowrap py-5">{props.nome}</td>
            <td>{props.fabricante}</td>
            <td className="desc">{props.modelo}</td>
            <td>R${props.preco}</td>
            <td>{props.soquete}</td>
            <td>{props.nNucleos}</td>
            <td>{props.nThreads}</td>
            <td>{props.frequencia} Ghz</td>
            <td>{props.freBoost} Ghz</td>
            <td>{props.tdp}W</td>
            <td>
                <span className="status--process">{props.overClock ? 'Desbloqueado' : <span className="status--denied">Bloqueado</span>}</span>
            </td>
            <td>
                <span className="status--denied">{props.graficoIntregado ? '' : 'Não'}</span>
            </td>
            <td>{props.tipoMemoria}</td>
            <td>{props.vendedor}</td>
            <td><a href={props.linkProduto}>{props.linkProduto}</a></td>
            <td>
                {controls ?
                    <div className="table-data-feature">
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Confirmar" onClick={() => setControls(false)}>
                            <i className="fa-solid fa-xmark text-danger"></i>
                        </button>
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Cancelar" onClick={() => setControls(false)}>
                            <i className="fa-solid fa-check text-success"></i>
                        </button>
                    </div>
                    :
                    <div className="table-data-feature">
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Edit" onClick={() => handleControls('Edit')}>
                            <i className='zmdi zmdi-edit'></i>
                        </button>

                        <button className="item" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => handleControls('Delete')}>
                            <i className="zmdi zmdi-delete"></i>
                        </button>
                    </div>
                }
            </td>
        </tr>
    )
}
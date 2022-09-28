import { useState } from "react";
import { Componente } from "../../TableRead"


interface MouseProps extends Componente{
    
}

export function Mouse(props:MouseProps){
    const [editable,setEditable] = useState(false);

    function handleEdit() {
        if(editable)
        setEditable(false);
        else
        setEditable(true);
    };

    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td>{props.nome}</td>
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
            <span className="status--process">{props.overClock? 'Desbloqueado' : <span className="status--denied">Bloqueado</span> }</span>
            </td>
            <td>
            <span className="status--denied">{props.graficoIntregado? '' : 'Não'}</span>
            </td>
            <td>{props.tipoMemoria}</td>
            <td>
            <span className="status--process">{props.status? 'Ativo' : 'Desativado'}</span>
            </td>
            <td>
                {editable?
                    <div className="table-data-feature">
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Confirmar" onClick={handleEdit}>
                            <i className="fa-solid fa-xmark text-danger"></i>
                        </button>
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Cancelar" onClick={handleEdit}>
                            <i className="fa-solid fa-check text-success"></i>
                        </button>
                    </div>
                    :
                    <div className="table-data-feature">
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleEdit}>
                        <i className='zmdi zmdi-edit'></i>
                        </button>
                
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleEdit}>
                            <i className="zmdi zmdi-delete"></i>
                        </button>
                    </div>
                }
            </td>
        </tr>     
    )
}
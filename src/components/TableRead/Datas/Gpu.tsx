import { useState } from "react";
import { Componente } from "../../TableRead"


interface GpuProps extends Componente {
    clock: number,
    memoria: string,
    clmemoria: string,
    barramento : number, 
    conector: string
    }

export function Gpu(props: GpuProps) {
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
            <td>{props.nome}</td>
            <td>{props.fabricante}</td>
            <td className="desc">{props.modelo}</td>
            <td>R${props.preco}</td>
            <td>{props.clock} Mhz</td>
            <td>{props.memoria}</td>
            <td>{props.clmemoria}</td>
            <td>{props.barramento}Bit</td>
            <td>{props.conector}</td>
            <td>{props.vendedor}</td>
            <td>
                <span className="status--process">{props.status ? 'Ativo' : 'Desativado'}</span>
            </td>
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
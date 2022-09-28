import { useState } from "react";
import { Componente } from "../../TableRead"


interface RamProps extends Componente {
    Nome: string,
    Fabricante:string,
    Modelo: string,
    preco: number,
    capacidade: number,
    velocidade: number,
    tecnologia: string,
    voltagem: string,
    latencia: string,
    notebook: boolean
}

export function Ram(props: RamProps) {
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
            <td>{props.capacidade}</td>
            <td>{props.velocidade} Mhz</td>
            <td>{props.tecnologia}</td>
            <td>{props.voltagem} V</td>
            <td>{props.latencia} Ghz</td>
            <td>{props.notebook}</td>

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
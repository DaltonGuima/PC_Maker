import { useState } from "react";
import type { Componente } from "~/Interface/ComponenteInterface";


interface PsuProps {
    potencia: number | undefined,
    certificacao: string | undefined,
    pfc: string | undefined,
    ventoinha: number | undefined,
    conPrincipal: string | undefined,
    conCPU: string | undefined,
    conPCIe: string | undefined,
    conSATA: string | undefined,
}

export function Psu(props: PsuProps & Componente) {
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
            <td>{props.potencia} Mhz</td>
            <td>{props.certificacao}</td>
            <td>{props.pfc}</td>
            <td>{props.ventoinha}Bit</td>
            <td>{props.conPrincipal}</td>
            <td>{props.conCPU}</td>
            <td>{props.conPCIe}</td>
            <td>{props.conSATA}</td>
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
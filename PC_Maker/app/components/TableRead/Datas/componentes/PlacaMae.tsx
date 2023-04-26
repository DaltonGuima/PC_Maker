import { useState } from "react";
import type { Componente } from "~/Interface/ComponenteInterface";


interface PlacaMaeProps {
    tipo: string | undefined,
    chipset: string | undefined,
    soquete: string | undefined,
    fatordeforma: string | undefined,
    tdp: string | undefined,
    tecnologiaram: string | undefined,
    slotsram: number | undefined,
    cmaxram: number | undefined,
    graficoi: string | undefined,
    slotsm2: number | undefined,
    slotspciex16: number | undefined,
    slotspci: number | undefined,

}

export function PlacaMae(props: PlacaMaeProps & Componente) {
    const [editable, setEditable] = useState(false);

    function handleEdit() {
        if (editable)
            setEditable(false);
        else
            setEditable(true);
    };

    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap py-5">{props.id}</td>
            <td className="text-nowrap py-5">{props.nome}</td>
            <td>{props.fabricante}</td>
            <td className="desc">{props.modelo}</td>
            <td>R${props.preco}</td>
            <td>{props.chipset}</td>
            <td>{props.soquete}</td>
            <td>{props.fatordeforma}</td>
            <td>{props.tdp}W</td>
            <td>{props.tecnologiaram}</td>
            <td>{props.slotsram}</td>
            <td>{props.cmaxram}GB</td>
            <td>{props.graficoi}</td>
            <td>{props.slotsm2}</td>
            <td>{props.slotspciex16}</td>
            <td>{props.slotspci}</td>
            <td>{props.vendedor}</td>
            <td><a href={props.linkProduto}>{props.linkProduto}</a></td>
            <td>
                {editable ?
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

import { useState } from "react";
import type { Componente } from "~/Interface/ComponenteInterface";



export interface VentoinhaProps {
    tamanho: string | undefined,
}

export function Ventoinha(props: VentoinhaProps & Componente) {
    const [editable, setEditable] = useState(false);

    function handleEdit() {
        const otherSate = editable === true ? false : true;
        setEditable(otherSate)
    };


    return (

        <tr className="tr-shadow">
            <td className="text-nowrap"><form id={`formVentoinha${props.id}`}>{props.id}</form></td>
            <td className="text-nowrap">
                <input form={`formVentoinha${props.id}`} type="text" name="nome" id="nome" defaultValue={props.nome} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formVentoinha${props.id}`} type="text" name="fabricante" id="fabricante" defaultValue={props.fabricante} className="inputComponente" readOnly={!editable} />
            </td>
            <td className="desc">
                <input form={`formVentoinha${props.id}`} type="text" name="modelo" id="modelo" defaultValue={props.modelo} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <div className="d-inline-flex">
                    R$<input form={`formVentoinha${props.id}`} type="number" name="preco" id="preco" defaultValue={props.preco} className="inputComponente" readOnly={!editable} />
                </div>
            </td>
            <td>
                <input form={`formVentoinha${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formVentoinha${props.id}`} type="url" name="linkProduto" id="linkProduto" defaultValue={props.linkProduto} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formVentoinha${props.id}`} type="text" name="tamanho" id="tamanho" defaultValue={props.tamanho} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                {editable ?
                    <div className="table-data-feature">
                        <button form={`formVentoinha${props.id}`} type="reset" className="item" data-toggle="tooltip" title="Cancelar" onClick={handleEdit}>
                            <i className="fa-solid fa-xmark text-danger"></i>
                        </button>
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Confirmar" onClick={handleEdit}>
                            <i className="fa-solid fa-check text-success"></i>
                        </button>
                    </div>
                    :
                    <div className="table-data-feature">
                        <button form={`formVentoinha${props.id}`} type="reset" className="item" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleEdit}>
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
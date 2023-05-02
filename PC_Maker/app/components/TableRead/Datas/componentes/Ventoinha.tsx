import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";
import type { Componente } from "~/Interface/ComponenteInterface";
import { ControlsTable } from "~/components/Form/ControlsTable";

export interface VentoinhaProps extends Componente{
    especificacoes:{
        tamanho: string | undefined,
    }
}

export function Ventoinha(props: VentoinhaProps) {
    const [editable, setEditable] = useState(false);
    const [operation, setOperation] = useState<string>("");


    function handleWithPutAndDelete(event: FormEvent) {
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (operation == "Delete") {
            axios.delete(`http://127.0.0.1:8080/api/v1/produtos/${props.id}`).then(() => {
                console.log("apagou");
            })
        } else {
            event.preventDefault()
            try {
                axios.put(`http://127.0.0.1:8080/api/v1/produtos/${props.id}`, {
                    nome: data.nome,
                    fabricante: data.fabricante,
                    modelo: data.modelo,
                    preco: Number(data.preco),
                    vendedor: data.vendedor,
                    linkProduto: data.linkProduto,
                    categoria: "Ventoinha",
                    especificacoes: { "tamanho": data.tamanho }
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (

        <tr className="tr-shadow">
            <td className="text-nowrap"><form id={`formVentoinha${props.id}`} onSubmit={handleWithPutAndDelete}>{props.id}</form></td>
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
                <input form={`formVentoinha${props.id}`} type="text" name="tamanho" id="tamanho" defaultValue={props.especificacoes.tamanho} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <ControlsTable
                    id={props.id}
                    setEditable={setEditable}
                    setOperation={setOperation}
                    operation={operation}
                    editable={editable}
                    componente="Ventoinha"
                />
            </td>
        </tr>
    )
}
import { Link } from "@remix-run/react";
import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";
import type { VentoinhaProps } from "~/Interface/ComponenteInterface";

import { ControlsTable } from "~/components/Form/ControlsTable";


export function Ventoinha(props: VentoinhaProps) {
    const [editable, setEditable] = useState(false);
    const [operation, setOperation] = useState<string>("");


    function handleWithPutAndDelete(event: FormEvent) {
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (operation == "Delete") {
            axios.delete(`http://127.0.0.1:8080/api/v1/produtos/${props.id}`).then(() => {
                console.log("apagou");
            }).catch((error: any) => alert(error))
        } else {
            event.preventDefault()
            try {
                axios.put(`http://127.0.0.1:8080/api/v1/produtos/${props.id}`, {
                    nome: data.nome,
                    fabricante: data.fabricante,
                    modelo: data.modelo,
                    categoria: "Ventoinha",
                    especificacoes: { "tamanho": data.tamanho }
                })
            } catch (error) {
                alert(error)
            }
        }
    }

    return (

        <tr className="tr-shadow">
            <td className="text-nowrap"><form id={`formVentoinha${props.id}`} onSubmit={handleWithPutAndDelete} action="post">{props.id}</form></td>
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
                <input form={`formVentoinha${props.id}`} type="text" name="tamanho" id="tamanho" defaultValue={props.especificacoes.tamanho} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <Link to={`/Dashboard/LocaisVendas/${props.id}`}>
                    <button className="btn btn-secondary btnDirectionarNaTable"> Ver Locais</button>
                </Link>
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
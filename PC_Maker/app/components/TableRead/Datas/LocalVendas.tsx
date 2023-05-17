import { Link } from "@remix-run/react";
import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";

import { ControlsTable } from "~/components/Form/ControlsTable";


export interface LocaisVendasProps {
    id: string,
    preco: number,
    vendedor: string,
    linkProduto: string,
}

export function LocalVendas(props: LocaisVendasProps) {
    const [editable, setEditable] = useState(false);
    const [operation, setOperation] = useState<string>("");


    function handleWithPutAndDelete(event: FormEvent) {
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        event.preventDefault()

        if (operation == "Delete") {
            axios.delete(`http://127.0.0.1:8080/api/v1/localvendas/${props.id}`).then(() => {
                console.log("apagou");
            }).catch((error: any) => alert(error))
            window.location.reload()

        } else {
            try {
                axios.put(`http://127.0.0.1:8080/api/v1/localvendas/${props.id}`, {
                    preco: Number(data.preco),
                    vendedor: data.vendedor,
                    linkProduto: data.linkProduto,
                })
            } catch (error) {
                alert(error)
            }
        }
    }

    return (

        <tr className="tr-shadow">
            <td><form id={`formLocaisVendas${props.id}`} onSubmit={handleWithPutAndDelete} action="post">{props.id}</form></td>
            <td>
                <input form={`formLocaisVendas${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formLocaisVendas${props.id}`} type="number" name="preco" id="preco" defaultValue={props.preco} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formLocaisVendas${props.id}`} type="url" name="linkProduto" id="linkProduto" defaultValue={props.linkProduto} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <ControlsTable
                    id={props.id}
                    setEditable={setEditable}
                    setOperation={setOperation}
                    operation={operation}
                    editable={editable}
                    componente="LocaisVendas"
                />
            </td>
        </tr>
    )
}
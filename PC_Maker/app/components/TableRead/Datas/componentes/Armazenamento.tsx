import { Link } from "@remix-run/react";
import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";
import type { ArmazenamentoProps } from "~/Interface/ComponenteInterface";
import { ControlsTable } from "~/components/Form/ControlsTable";

export function Armazenamento(props: ArmazenamentoProps) {
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
                    categoria: "Armazenamento",
                    especificacoes: {
                        "tipo": data.tipo,
                        "capacidade": data.capacidade,
                        "velEscrita": data.velEscrita,
                        "velLeitura": data.velLeitura,
                    }
                })
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap"><form id={`formArmazenamento${props.id}`} onSubmit={handleWithPutAndDelete}>{props.id}</form></td>
            <td className="text-nowrap">
                <input form={`formArmazenamento${props.id}`} type="text" name="nome" id="nome" defaultValue={props.nome} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formArmazenamento${props.id}`} type="text" name="fabricante" id="fabricante" defaultValue={props.fabricante} className="inputComponente" readOnly={!editable} />
            </td>
            <td className="desc">
                <input form={`formArmazenamento${props.id}`} type="text" name="modelo" id="modelo" defaultValue={props.modelo} className="inputComponente" readOnly={!editable} />
            </td>
            
            {/* especficações */}
            <td>
                <input form={`formArmazenamento${props.id}`} type="text" name="tipo" id="tipo" defaultValue={props.especificacoes.tipo} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formArmazenamento${props.id}`} type="text" name="capacidade" id="capacidade" defaultValue={props.especificacoes.capacidade} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formArmazenamento${props.id}`} type="text" name="velEscrita" id="velEscrita" defaultValue={props.especificacoes.velEscrita} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formArmazenamento${props.id}`} type="text" name="veLeitura" id="veLeitura" defaultValue={props.especificacoes.velLeitura} className="inputComponente" readOnly={!editable} />
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
                    componente="Armazenamento"
                />
            </td>
        </tr>
    )
}
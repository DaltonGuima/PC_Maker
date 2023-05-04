import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";
import type { PsuProps } from "~/Interface/ComponenteInterface";
import { ControlsTable } from "~/components/Form/ControlsTable";


export function Psu(props: PsuProps) {
    const [editable, setEditable] = useState(false);
    const [operation, setOperation] = useState<string>("");


    function handleWithPutAndDelete(event: FormEvent) {
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (operation == "Delete") {
            axios.delete(`http://127.0.0.1:8080/api/v1/produtos/${props.id}`).then(() => {
                console.log("apagou");
            }).catch(error => alert(error))
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
                    categoria: "Psu",
                    especificacoes: {
                        potencia: data.potencia,
                        certificacao: data.certificacao,
                        pfc: data.pfc,
                        ventoinha: data.ventoinha,
                        conPrincipal: data.conPrincipal,
                        conCPU: data.conCPU,
                        conPCIe: data.conPCIe,
                        conSATA: data.conSATA,
                    }
                })
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap"><form id={`formPsu${props.id}`} onSubmit={handleWithPutAndDelete}>{props.id}</form></td>
            <td className="text-nowrap">
                <input form={`formPsu${props.id}`} type="text" name="nome" id="nome" defaultValue={props.nome} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="fabricante" id="fabricante" defaultValue={props.fabricante} className="inputComponente" readOnly={!editable} />
            </td>
            <td className="desc">
                <input form={`formPsu${props.id}`} type="text" name="modelo" id="modelo" defaultValue={props.modelo} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <div className="d-inline-flex">
                    R$<input form={`formPsu${props.id}`} type="number" name="preco" id="preco" defaultValue={props.preco} className="inputComponente" readOnly={!editable} />
                </div>
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="url" name="linkProduto" id="linkProduto" defaultValue={props.linkProduto} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>
            {/* especficações */}
            <td>
                <input form={`formPsu${props.id}`} type="text" name="potencia" id="potencia" defaultValue={props.especificacoes.potencia} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="certificacao" id="certificacao" defaultValue={props.especificacoes.certificacao} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="pfc" id="pfc" defaultValue={props.especificacoes.pfc} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="ventoinha" id="ventoinha" defaultValue={props.especificacoes.ventoinha} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="conPrincipal" id="conPrincipal" defaultValue={props.especificacoes.conPrincipal} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="conCPU" id="conCPU" defaultValue={props.especificacoes.conCPU} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="conPCIe" id="conPCIe" defaultValue={props.especificacoes.conPCIe} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPsu${props.id}`} type="text" name="conSATA" id="conSATA" defaultValue={props.especificacoes.conSATA} className="inputComponente" readOnly={!editable} />
            </td>

            <td>
                <ControlsTable
                    id={props.id}
                    setEditable={setEditable}
                    setOperation={setOperation}
                    operation={operation}
                    editable={editable}
                    componente="Psu"
                />
            </td>
        </tr>
    )
}
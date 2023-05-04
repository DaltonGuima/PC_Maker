import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";
import type { MouseProps } from "~/Interface/ComponenteInterface";
import { ControlsTable } from "~/components/Form/ControlsTable";



export function Mouse(props: MouseProps) {
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
                    categoria: "Mouse",
                    especificacoes: {
                        "ndebotões": data.ndebotões,
                        "dpi": data.dpi,
                    }
                })
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap"><form id={`formMouse${props.id}`} onSubmit={handleWithPutAndDelete}>{props.id}</form></td>
            <td className="text-nowrap">
                <input form={`formMouse${props.id}`} type="text" name="nome" id="nome" defaultValue={props.nome} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formMouse${props.id}`} type="text" name="fabricante" id="fabricante" defaultValue={props.fabricante} className="inputComponente" readOnly={!editable} />
            </td>
            <td className="desc">
                <input form={`formMouse${props.id}`} type="text" name="modelo" id="modelo" defaultValue={props.modelo} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <div className="d-inline-flex">
                    R$<input form={`formMouse${props.id}`} type="number" name="preco" id="preco" defaultValue={props.preco} className="inputComponente" readOnly={!editable} />
                </div>
            </td>
            <td>
                <input form={`formMouse${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formMouse${props.id}`} type="url" name="linkProduto" id="linkProduto" defaultValue={props.linkProduto} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formMouse${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>
            {/* especficações */}
            <td>
                <input form={`formMouse${props.id}`} type="text" name="ndebotões" id="ndebotões" defaultValue={props.especificacoes.ndebotões} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formMouse${props.id}`} type="text" name="dpi" id="dpi" defaultValue={props.especificacoes.dpi} className="inputComponente" readOnly={!editable} />
            </td>

            <td>
                <ControlsTable
                    id={props.id}
                    setEditable={setEditable}
                    setOperation={setOperation}
                    operation={operation}
                    editable={editable}
                    componente="Mouse"
                />
            </td>
        </tr>
    )
}
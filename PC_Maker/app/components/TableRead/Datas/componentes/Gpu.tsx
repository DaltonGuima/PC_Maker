import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";
import type { GpuProps } from "~/Interface/ComponenteInterface";
import { ControlsTable } from "~/components/Form/ControlsTable";



export function Gpu(props: GpuProps) {

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
                    categoria: "Gpu",
                    especificacoes: {
                        "clock": data.clock,
                        "memoria": data.memoria,
                        "clmemoria": data.clmemoria,
                        "barramento": data.barramento,
                        "conector": data.conector,
                    }
                })
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap"><form id={`formGpu${props.id}`} onSubmit={handleWithPutAndDelete}>{props.id}</form></td>
            <td className="text-nowrap">
                <input form={`formGpu${props.id}`} type="text" name="nome" id="nome" defaultValue={props.nome} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formGpu${props.id}`} type="text" name="fabricante" id="fabricante" defaultValue={props.fabricante} className="inputComponente" readOnly={!editable} />
            </td>
            <td className="desc">
                <input form={`formGpu${props.id}`} type="text" name="modelo" id="modelo" defaultValue={props.modelo} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <div className="d-inline-flex">
                    R$<input form={`formGpu${props.id}`} type="number" name="preco" id="preco" defaultValue={props.preco} className="inputComponente" readOnly={!editable} />
                </div>
            </td>
            <td>
                <input form={`formGpu${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formGpu${props.id}`} type="url" name="linkProduto" id="linkProduto" defaultValue={props.linkProduto} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formGpu${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>

            <td>
                <input form={`formGpu${props.id}`} type="text" name="clock" id="clock" defaultValue={props.especificacoes.clock} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formGpu${props.id}`} type="text" name="memoria" id="memoria" defaultValue={props.especificacoes.memoria} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formGpu${props.id}`} type="text" name="clmemoria" id="clmemoria" defaultValue={props.especificacoes.clmemoria} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formGpu${props.id}`} type="text" name="barramento" id="barramento" defaultValue={props.especificacoes.barramento} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formGpu${props.id}`} type="text" name="conector" id="conector" defaultValue={props.especificacoes.conector} className="inputComponente" readOnly={!editable} />
            </td>

            <td>
                <ControlsTable
                    id={props.id}
                    setEditable={setEditable}
                    setOperation={setOperation}
                    operation={operation}
                    editable={editable}
                    componente="Gpu"
                />
            </td>
        </tr>
    )
}
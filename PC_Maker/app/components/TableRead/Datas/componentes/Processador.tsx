import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";
import type { Componente, ProcessadorProps } from "~/Interface/ComponenteInterface";
import { ControlsTable } from "~/components/Form/ControlsTable";





export function Processador(props: ProcessadorProps & Componente) {
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
                    categoria: "Processador",
                    especificacoes: {
                        soquete: data.soquete,
                        nNucleos: data.nNucleos,
                        nThreads: data.nThreads,
                        frequencia: data.frequencia,
                        freBoost: data.freBoost,
                        tdp: data.tdp,
                        overClock: data.overClock,
                        graficoIntregado: data.graficoIntregado,
                        tipoMemoria: data.tipoMemoria
                    }
                })
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap"><form id={`formProcessador${props.id}`} onSubmit={handleWithPutAndDelete}>{props.id}</form></td>
            <td className="text-nowrap">
                <input form={`formProcessador${props.id}`} type="text" name="nome" id="nome" defaultValue={props.nome} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="fabricante" id="fabricante" defaultValue={props.fabricante} className="inputComponente" readOnly={!editable} />
            </td>
            <td className="desc">
                <input form={`formProcessador${props.id}`} type="text" name="modelo" id="modelo" defaultValue={props.modelo} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <div className="d-inline-flex">
                    R$<input form={`formProcessador${props.id}`} type="number" name="preco" id="preco" defaultValue={props.preco} className="inputComponente" readOnly={!editable} />
                </div>
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="url" name="linkProduto" id="linkProduto" defaultValue={props.linkProduto} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="vendedor" id="vendedor" defaultValue={props.vendedor} className="inputComponente" readOnly={!editable} />
            </td>
            {/* especficações */}
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="soquete" id="soquete" defaultValue={props.especificacoes.soquete} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="nNucleos" id="nNucleos" defaultValue={props.especificacoes.nNucleos} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="nThreads" id="nThreads" defaultValue={props.especificacoes.nThreads} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="frequencia" id="frequencia" defaultValue={props.especificacoes.frequencia} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="freBoost" id="freBoost" defaultValue={props.especificacoes.freBoost} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="tdp" id="tdp" defaultValue={props.especificacoes.tdp} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="overClock" id="overClock" defaultValue={props.especificacoes.overClock} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="graficoIntregado" id="graficoIntregado" defaultValue={props.especificacoes.graficoIntregado} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formProcessador${props.id}`} type="text" name="tipoMemoria" id="tipoMemoria" defaultValue={props.especificacoes.tipoMemoria} className="inputComponente" readOnly={!editable} />
            </td>

            <td>
                <ControlsTable
                    id={props.id}
                    setEditable={setEditable}
                    setOperation={setOperation}
                    operation={operation}
                    editable={editable}
                    componente="Processador"
                />
            </td>
        </tr>
    )
}
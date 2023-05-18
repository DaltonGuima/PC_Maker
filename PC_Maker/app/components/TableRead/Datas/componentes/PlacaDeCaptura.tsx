import { Link } from "@remix-run/react";
import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";
import type { PlacaDeCapturaProps } from "~/Interface/ComponenteInterface";
import { ControlsTable } from "~/components/Form/ControlsTable";

export function PlacaDeCaptura(props: PlacaDeCapturaProps) {
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
                    categoria: "PlacaDeCaptura",
                    especificacoes: {
                        "interface": data.interface,
                        "saida": data.saida,
                        "taxadbit": data.taxadbit,
                        "maioresupor": data.maioresupor,
                    }
                })
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap"><form id={`formPlacaDeCaptura${props.id}`} onSubmit={handleWithPutAndDelete}>{props.id}</form></td>
            <td className="text-nowrap">
                <input form={`formPlacaDeCaptura${props.id}`} type="text" name="nome" id="nome" defaultValue={props.nome} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaDeCaptura${props.id}`} type="text" name="fabricante" id="fabricante" defaultValue={props.fabricante} className="inputComponente" readOnly={!editable} />
            </td>
            <td className="desc">
                <input form={`formPlacaDeCaptura${props.id}`} type="text" name="modelo" id="modelo" defaultValue={props.modelo} className="inputComponente" readOnly={!editable} />
            </td>
            
            {/* especficações */}
            <td>
                <input form={`formPlacaDeCaptura${props.id}`} type="text" name="interface" id="interface" defaultValue={props.especificacoes.interface} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaDeCaptura${props.id}`} type="text" name="saida" id="saida" defaultValue={props.especificacoes.saida} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaDeCaptura${props.id}`} type="text" name="taxadbit" id="taxadbit" defaultValue={props.especificacoes.taxadbit} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaDeCaptura${props.id}`} type="text" name="maioresupor" id="maioresupor" defaultValue={props.especificacoes.maioresupor} className="inputComponente" readOnly={!editable} />
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
                    componente="PlacaDeCaptura"
                />
            </td>
        </tr>
    )
}
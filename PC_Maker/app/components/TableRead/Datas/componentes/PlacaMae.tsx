import { Link } from "@remix-run/react";
import axios from "axios";
import type { FormEvent } from "react";
import { useState } from "react";
import type { Componente, PlacaMaeProps } from "~/Interface/ComponenteInterface";
import { ControlsTable } from "~/components/Form/ControlsTable";




export function PlacaMae(props: PlacaMaeProps & Componente) {
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
                    categoria: "PlacaMae",
                    especificacoes: {
                        tipo: data.tipo,
                        chipset: data.chipset,
                        soquete: data.soquete,
                        fatordeforma: data.fatordeforma,
                        tdp: data.tdp,
                        tecnologiaram: data.tecnologiaram,
                        slotsram: data.slotsram,
                        cmaxram: data.cmaxram,
                        graficoi: data.graficoi,
                        slotsm2: data.slotsm2,
                        slotspciex16: data.slotspciex16,
                        slotspci: data.slotspci,
                    }
                })
            } catch (error) {
                alert(error)
            }
        }
    }
    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap"><form id={`formPlacaMae${props.id}`} onSubmit={handleWithPutAndDelete}>{props.id}</form></td>
            <td className="text-nowrap">
                <input form={`formPlacaMae${props.id}`} type="text" name="nome" id="nome" defaultValue={props.nome} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="fabricante" id="fabricante" defaultValue={props.fabricante} className="inputComponente" readOnly={!editable} />
            </td>
            <td className="desc">
                <input form={`formPlacaMae${props.id}`} type="text" name="modelo" id="modelo" defaultValue={props.modelo} className="inputComponente" readOnly={!editable} />
            </td>
            
            {/* especficações */}
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="tipo" id="tipo" defaultValue={props.especificacoes.tipo} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="chipset" id="chipset" defaultValue={props.especificacoes.chipset} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="soquete" id="soquete" defaultValue={props.especificacoes.soquete} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="fatordeforma" id="fatordeforma" defaultValue={props.especificacoes.fatordeforma} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="tdp" id="tdp" defaultValue={props.especificacoes.tdp} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="tecnologiaram" id="tecnologiaram" defaultValue={props.especificacoes.tecnologiaram} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="slotsram" id="slotsram" defaultValue={props.especificacoes.slotsram} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="cmaxram" id="cmaxram" defaultValue={props.especificacoes.cmaxram} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="graficoi" id="graficoi" defaultValue={props.especificacoes.graficoi} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="slotsm2" id="slotsm2" defaultValue={props.especificacoes.slotsm2} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="slotspciex16" id="slotspciex16" defaultValue={props.especificacoes.slotspciex16} className="inputComponente" readOnly={!editable} />
            </td>
            <td>
                <input form={`formPlacaMae${props.id}`} type="text" name="slotspci" id="slotspci" defaultValue={props.especificacoes.slotspci} className="inputComponente" readOnly={!editable} />
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
                    componente="PlacaMae"
                />
            </td>
        </tr>
    )
}

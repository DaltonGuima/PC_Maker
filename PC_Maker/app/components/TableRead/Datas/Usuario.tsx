import { useState } from "react";
import type { FormEvent } from "react";
import axios from "axios";


export interface UsuarioProps {
    id: string,
    nome: string,
    dataNascimento: string,
    email: string,
    senha: string,
}

export function Usuario(props: UsuarioProps) {
    const [editable, setEditable] = useState(false);
    const [operation, setOperation] = useState<string>("");

    function handleEdit() {
        if (editable)
            setEditable(false);
        else
            setEditable(true);
    };

    function handleWithPutAndDelete(event: FormEvent) {
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (operation == "Delete") {
            axios.delete(`http://127.0.0.1:8080/api/v1/usuarios/${props.id}`).then(() => {
                console.log("apagou");
            })
        } else {
            event.preventDefault()
            try {
                axios.put(`http://127.0.0.1:8080/api/v1/usuarios/${props.id}`, {
                    nome: data.nome,
                    dataNascimento: data.dataNascimento,
                    email: data.email,
                    senha: data.senha
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap" >{props.id}</td>
            <td>{props.nome}</td>
            <td>{props.dataNascimento}</td>
            <td>{props.email}</td>
            <td>{props.senha}</td>
            <td>
                {editable ?
                    <div className="table-data-feature">
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Confirmar" onClick={handleEdit}>
                            <i className="fa-solid fa-xmark text-danger"></i>
                        </button>
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Cancelar" onClick={handleEdit}>
                            <i className="fa-solid fa-check text-success"></i>
                        </button>
                    </div>
                    :
                    <div className="table-data-feature">
                        <button className="item" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleEdit}>
                            <i className='zmdi zmdi-edit'></i>
                        </button>

                        <button className="item" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleEdit}>
                            <i className="zmdi zmdi-delete"></i>
                        </button>
                    </div>
                }
            </td>
        </tr>
    )
}


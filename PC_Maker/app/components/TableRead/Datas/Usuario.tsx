import { useState } from "react";

interface UsuarioProps {
    id: string,
    nome: string,
    dataNascimento: string,
    email: string,
    senha: string,
}

export function Usuario(props: UsuarioProps) {
    const [editable, setEditable] = useState(false);

    function handleEdit() {
        if (editable)
            setEditable(false);
        else
            setEditable(true);
    };

    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap" >{props.id}</td>
            <td>{props.nome}</td>
            <td>{props.dataNascimento}</td>
            <td>{props.email}</td>
            <td className="desc">{props.senha}</td>
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

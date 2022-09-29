import { useState } from "react";

interface FeedbackProps {
    idUsuario: string,
    usuario: string,
    comentario: string,
    upvotes: number,
    downvotes: number,
}

export function Feedback(props: FeedbackProps) {
    const [editable, setEditable] = useState(false);

    function handleEdit() {
        if (editable)
            setEditable(false);
        else
            setEditable(true);
    };

    return (
        <tr className="tr-shadow" contentEditable={editable}>
            <td className="text-nowrap" >{props.idUsuario}</td>
            <td>{props.usuario}</td>
            <td className="desc">{props.comentario}</td>
            <td className="text-success">{props.upvotes} <i className="fa-solid fa-chevron-up"></i></td>
            <td className="text-danger">{props.downvotes} <i className="fa-solid fa-chevron-down"></i></td>
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

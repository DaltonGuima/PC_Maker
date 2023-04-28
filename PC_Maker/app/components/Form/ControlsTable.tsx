import type { Dispatch } from "react"

interface ControlsTableProps {
    id: string,
    setEditable: Dispatch<boolean>,
    setOperation: Dispatch<string>,
    editable: boolean
    operation: string
    componente: string
}


//Estão invertido e nao sei o pq
export function ControlsTable(props: ControlsTableProps) {

    function handleEdit() {
        props.setEditable(!props.editable)
    };

    function handleOperation(type: string) {
        props.setOperation(type)
    }

    if (props.editable == true) {
        return (
            <div className="table-data-feature">
                <button form={`form${props.componente}${props.id}`} type="button" className="item" data-toggle="tooltip" title="Cancelar"
                    onClick={handleEdit}
                >
                    <i className="fa-solid fa-xmark text-danger"></i>
                </button>
                <button form={`form${props.componente}${props.id}`} type="button" className="item" data-toggle="tooltip" title="Confirmar"
                    onClick={handleEdit}
                >
                    <i className="fa-solid fa-check text-success"></i>
                </button>
            </div>
        )
    } else {
        return (
            <div className="table-data-feature">
                <button form={`form${props.componente}${props.id}`} type="reset" className="item" data-toggle="tooltip" title="Edit"
                    onClick={() => {
                        handleEdit()
                        handleOperation("Edit")
                    }}
                >
                    <i className='zmdi zmdi-edit'></i>
                </button>
                <button form={`form${props.componente}${props.id}`} type="submit" className="item" data-toggle="tooltip" title="Delete"
                    onClick={() => {
                        handleEdit()
                        handleOperation("Delete")
                    }}
                >
                    <i className="zmdi zmdi-delete"></i>
                </button>
            </div>)
    }
}
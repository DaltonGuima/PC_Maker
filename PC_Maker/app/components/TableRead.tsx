import { useState } from "react"
import { arrumaId } from "../script/arrumaId"
import useTable from "../script/useTable"
import { TableElements } from "./TableRead/TableElements"
import { TableReadHead } from "./TableRead/TableReadHead"

export interface TableReadProps {
    id: string
    tipoCRUD: string
    insereDados: boolean,
    produtoId?: number,
    tipoPesquisa: string
}

interface TableReadFullBodyProps extends TableReadProps {
    body: React.ReactNode[],
    cols: string[]
    title: string
}

export function TableRead(props: TableReadFullBodyProps) {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(props.body, page, 5);

    return (
        <div className="col-md-12 highlight-dashboard" id={arrumaId(props.id)}>
            <h3 className="title-5 m-b-35 text-light table-h3">{props.title}</h3>
            <TableElements
                slice={slice}
                range={range}
                page={page}
                setPage={setPage}
                insereDados={props.insereDados}
                tipoCRUD={props.tipoCRUD}
                id={props.id}
                produtoId={props?.produtoId}
                tipoPesquisa={props.tipoPesquisa}
            />
            <div className="table-responsive">
                <table className="table table-data2">
                    <TableReadHead
                        cols={props.cols}
                    />
                    <tbody>
                        {
                            slice
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
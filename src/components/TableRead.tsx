import { Processador } from "./TableRead/Datas/Processador"
import { TableElements } from "./TableRead/TableElements"
import { TableReadHead, TableReadHeadProps } from "./TableRead/TableReadHead"
export interface Componente{
    id: string,
    nome: string,
    fabricante: string,
    modelo: string,
    preco: number,
    status: boolean, 
}

interface TableReadProps{
    body: React.ReactNode[],
    titulo: string,
    cols: string[]
}

export function TableRead(props:TableReadProps){
    return(
        <div className="col-md-12">
            <h3 className="title-5 m-b-35 text-light table-h3">{props.titulo}</h3>
            <TableElements/>
            <div className="table-responsive">
                <table className="table table-data2">
                    <TableReadHead
                        cols={props.cols}
                    />
                    <tbody>
                        {props.body}
                    </tbody>      
                </table>
            </div>
        </div>
    )
}
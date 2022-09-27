import { Processador } from "./TableRead/Processador"
import { TableElements } from "./TableRead/TableElements"
import { TableReadHead, TableReadHeadProps } from "./TableRead/TableReadHead"

interface TableReadProps extends TableReadHeadProps{
    titulo: string

}

export interface TableRead{
    nome: string,
    fabricante: string,
    modelo: string,
    preco: number,
    status: boolean, 
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
                        <Processador
                            nome="Xeon Gold 6330"
                            fabricante="Intel"
                            modelo="Xeon Gold 6330"
                            preco={18709.99}
                            soquete='LGA 4189'
                            nNucleos={28}
                            nThreads={58}
                            frequencia={2.00}
                            freBoost={3.10}
                            tdp={205}
                            overClock={false}
                            graficoIntregado={false}
                            tipoMemoria='DD4'
                            status
                        />
                        <tr className="spacer"></tr>        
                    </tbody>      
                </table>
            </div>
        </div>
    )
}
import { useState } from "react";
import useTable from "~/script/useTable";

interface TableSearchProps {
    body: JSX.Element[]
}

export default function TableSearch(props: TableSearchProps) {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(props.body, page, 5);

    function Paginacao(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        setPage(parseInt(value))
    }
    return (
        <div id="content" className="w-100 d-block">
            <div className="container-fluid">
                <div className="row border-bottom border-secondary-subtle pb-3">
                    <div className="col text-white fs-4 text-start">{props.body.length} Resultados Encontrados</div>
                    {/* Adcionar algum estilo aqui */}
                    <div className="col d-flex justify-content-end">

                        <div className="form-floating text-light col-md-3">
                            <select onChange={Paginacao} className="form-select form-select-dark bg-transparent text-light py-2" name="property" id='paginas'>
                                {
                                    range.map((el: number) =>
                                        (<option key={el} value={el} className="bg-dark text-light">Página {el} </option>))
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <table className="table-search text-light mt-5 w-100">
                    <thead>
                        <tr className="p-2">
                            <th className="col-md-7 pb-3">Nome</th>
                            <th className="col-md-2">Avaliação</th>
                            <th className="col-md-1">Menor Preço</th>
                            <th className="col-md-1">Vendedor</th>
                        </tr>
                    </thead>


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
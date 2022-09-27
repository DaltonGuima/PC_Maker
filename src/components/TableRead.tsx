import { propTypes } from "react-bootstrap/esm/Image"
import th from "../vendor/fullcalendar-3.10.0/locale/th"

export interface TableReadProps{
    titulo: string,
    cols: string[],
    nome: string,
    fabricante: string,
    modelo: string,
    preco: number,
    status: boolean,    
}


export function TableRead(props:TableReadProps){
return(
    <div>
        <h3 className="title-5 m-b-35 text-light table-h3">{props.titulo}</h3>
            <div className="table-data__tool">
                <div className="table-data__tool-left">
                    <div className="rs-select2--light rs-select2--md">
                        <select className="js-select2 selectFilter" name="property">
                            <option>Pag 1</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                        </select>
                        <div className="dropDownSelect2"></div>
                    </div>
                    <div className="rs-select2--light rs-select2--sm ">
                        <select className="js-select2 selectFilter" name="time">
                            <option >Today</option>
                            <option value="">3 Days</option>
                            <option value="">1 Week</option>
                        </select>
                        <div className="dropDownSelect2"></div>
                    </div>
                    <button className="au-btn-filter">
                        <i className="zmdi zmdi-filter-list"></i>filters</button>
                </div>
                <div className="table-data__tool-right">
                    <button className="au-btn au-btn-icon au-btn--purple au-btn--small">
                        <i className="zmdi zmdi-plus"></i>add item</button>
                    <div className="rs-select2--dark rs-select2--sm rs-select2--dark2 ">
                        <select className="js-select2 selectFilter" name="type">
                            <option >Export</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                        </select>
                        <div className="dropDownSelect2"></div>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-data2">
                    <thead>
                        <tr>
                            {
                                props.cols.map(colunas => <th>{colunas}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tr-shadow">
                            <td>{props.nome}</td>
                            <td>{props.fabricante}</td>
                            <td className="desc">{props.modelo}</td>
                            <td>R${props.preco}</td>  
                            
                        </tr>
                        <tr className="spacer"></tr>
                        <tr className="tr-shadow">
                            <td>I5 10400F</td>
                            <td>
                                Intel
                            </td>
                            <td className="desc">BX8070110400</td>
                            <td>R$ 839,99</td>
                            <td>LGA 1200</td>
                            <td>6</td>
                            <td>12</td>
                            <td>2.9 GHz</td>
                            <td>4.3 GHz</td>
                            <td>65 W</td>
                            <td>
                            <span className="status--denied">Bloqueado</span>
                            </td>
                            <td>
                            <span className="status--denied">Não</span>
                            </td>
                            <td>DDR4</td>
                            <td>
                            <div className="table-data-feature">
                                    <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                        <i className="zmdi zmdi-mail-send"></i>
                                    </button>
                                    <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                        <i className="zmdi zmdi-edit"></i>
                                    </button>
                                    <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                        <i className="zmdi zmdi-delete"></i>
                                    </button>
                                    <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                                        <i className="zmdi zmdi-more"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
)
}   
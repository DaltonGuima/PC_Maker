import { useNavigate } from 'react-router-dom';
import { arrumaId } from '../../utils/arrumaId';

export interface TableElementsProps {
    id: string
    tipoCRUD: string
    insereDados: boolean
}

export function TableElements({ id, tipoCRUD, insereDados }: TableElementsProps) {
    const navigate = useNavigate();

    function Navigate() {
        arrumaId(id)
        navigate(`/${tipoCRUD}/insercao/${id}`)
        return id
    }

    return (
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
                <button className="au-btn-filter" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="zmdi zmdi-filter-list"></i>filters
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item text-light" href="#">A ~ Z</a></li>
                    <li><a className="dropdown-item text-light" href="#">Data Criação</a></li>
                    <li><a className="dropdown-item text-light" href="#">Data de Modificação</a></li>
                </ul>
                <form className='input-search-dashboard d-inline'>
                    <input className='mx-4 bg-dark rounded px-2 my-2' type="text" placeholder="Search" name='' id='itemPesquisa' />
                    <button id="search-field">
                        <a className='text-white'>
                            <i className="fa fa-search"></i>
                        </a>
                    </button>
                </form>


            </div>
            <div className="table-data__tool-right">
                {insereDados ?
                    <button style={{ textDecoration: 'none' }} onClick={Navigate} className="au-btn au-btn-icon au-btn--purple au-btn--small mx-3" >
                        <i className="zmdi zmdi-plus"></i>add item
                    </button>
                    :
                    null
                }
                <div className="rs-select2--dark rs-select2--sm rs-select2--dark2 ">
                    <select className="js-select2 selectFilter" name="type">
                        <option> Export</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                    </select>
                    <div className="dropDownSelect2"></div>
                </div>
            </div>
        </div>
    )
}
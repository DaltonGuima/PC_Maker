import { Dispatch, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrumaId } from '../../utils/arrumaId';
import { TableReadProps } from '../TableRead';
interface TableElementsProps extends TableReadProps {
    page: number,
    setPage: Dispatch<number>,
    slice: React.ReactNode[],
    range: number[]
}

export function TableElements(props: TableElementsProps) {

    const navigate = useNavigate();

    function Navigate() {
        if (props.tipoCRUD == arrumaId(props.id)) {
            navigate(`/${props.tipoCRUD}/insercao`)
        } else {
            navigate(`/${props.tipoCRUD}/insercao/${arrumaId(props.id)}`)
        }
    }

    function Paginacao(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        props.setPage(parseInt(value))
    }

    useEffect(() => {
        if (props.slice.length < 1 && props.page !== 1) {
            props.setPage(props.page - 1);
        }
    }, [props.slice, props.page, props.setPage]);

    return (
        <div className="table-data__tool">
            <div className="table-data__tool-left">
                <div className="rs-select2--light rs-select2--md">
                    <select onChange={Paginacao} className="js-select2 selectFilter" name="property" id='paginas'>
                        {props.range.map(el =>
                            (<option key={el} value={el}>Pág {el}</option>))
                        }
                    </select>
                    <div className="dropDownSelect2"></div>
                </div>
                <button className="au-btn-filter" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="zmdi zmdi-filter-list"></i>filtros
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
                {props.insereDados ?
                    <button style={{ textDecoration: 'none' }} onClick={Navigate} className="au-btn au-btn-icon au-btn--purple au-btn--small mx-3" >
                        <i className="zmdi zmdi-plus"></i>Adicionar item
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
        </div >
    )
}
import type { ChangeEvent, Dispatch } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrumaId } from '../../script/arrumaId';
import type { TableReadProps } from '../TableRead';
import { hookstate, useHookstate } from '@hookstate/core';
interface TableElementsProps extends TableReadProps {
    page: number,
    setPage: Dispatch<number>,
    slice: React.ReactNode[],
    range: number[]
}

export const SearchTable = hookstate("");

export function TableElements(props: TableElementsProps) {
    const SearchByNomeInput = useHookstate(SearchTable)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        SearchByNomeInput.set(event.target.value);
    };

    const navigate = useNavigate();

    function Navigate() {
        if (props.tipoCRUD == arrumaId(props.id)) {
            navigate(`/Dashboard/Insert${arrumaId(props.id)}`)
        } else {
            if (props.id == "LocalVenda") {
                navigate(`/Dashboard/Insert${arrumaId(props.id)}/${props.produtoId}`)
            } else {
                navigate(`/Dashboard/DashboardInsercao/Insert${arrumaId(props.id)}`)
            }
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
    }, [props.slice, props.page, props.setPage, props]);

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
                <form className='input-search-dashboard d-inline'>
                    <input className='mx-4 bg-dark rounded px-2 my-2' type="text" placeholder={`Procurar por ${props.tipoPesquisa}`} name={props.id} id={props.id} onChange={handleChange} value={SearchByNomeInput.get()} />
                    <label className='text-light' htmlFor={props.id}>
                        <i className="fa fa-search text-light"></i>
                    </label>
                </form>


            </div>
            <div className="table-data__tool-right">
                {props.insereDados &&
                    <button style={{ textDecoration: 'none' }} onClick={Navigate} className="au-btn au-btn-icon au-btn--purple au-btn--small mx-3" >
                        <i className="zmdi zmdi-plus"></i>Adicionar item
                    </button>
                }
            </div>
        </div >
    )
}
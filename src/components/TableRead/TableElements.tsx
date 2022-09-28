import { Link } from "react-router-dom";

interface TableElementsProps{
    id:string
}

export function TableElements({id}:TableElementsProps){
    id = id.replace(/\s/g, '');
    id = id.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    console.log(id)
    return(
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
            <Link style={{textDecoration: 'none'}} to={`/insercao/${id}`} className="au-btn au-btn-icon au-btn--purple au-btn--small mx-3" >
                <i className="zmdi zmdi-plus"></i>add item
            </Link>
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
)}
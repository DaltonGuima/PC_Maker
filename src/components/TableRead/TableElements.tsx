export function TableElements(){
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
            <button className="au-btn au-btn-icon au-btn--purple au-btn--small">
                <i className="zmdi zmdi-plus"></i>add item</button>
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
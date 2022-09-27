import { Outlet } from 'react-router'

function DashboardInsercao() {
  return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    {/* Topo  */}
                    <div className="row">
                        <h3 className="title-5 m-b-35 text-light table-h3">Inserção de Componentes</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-left">
                                <div className="rs-select2--light rs-select2--md">
                                    <select className="js-select2 selectFilter" name="property">
                                        <option value="">Pag 1</option>
                                        <option value=""><a href="/componentes">Option 1</a></option>
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
                        </div>
                    </div>

                    <Outlet/>

                    {/* Formulário */}

                </div>
            </div>
        </div>

  )
}

export default DashboardInsercao
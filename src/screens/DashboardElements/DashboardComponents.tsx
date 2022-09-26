function DashboardComponents(){
    return(
        <div className="main-content">
        <div className="section__content section__content--p30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="title-5 m-b-35 text-light table-h3">Data table</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-left">
                                <div className="rs-select2--light rs-select2--md">
                                    <select className="js-select2 selectFilter" name="property">
                                        <option selected>All Properties</option>
                                        <option value="">Option 1</option>
                                        <option value="">Option 2</option>
                                    </select>
                                    <div className="dropDownSelect2"></div>
                                </div>
                                <div className="rs-select2--light rs-select2--sm ">
                                    <select className="js-select2 selectFilter" name="time">
                                        <option selected>Today</option>
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
                                        <option selected>Export</option>
                                        <option value="">Option 1</option>
                                        <option value="">Option 2</option>
                                    </select>
                                    <div className="dropDownSelect2"></div>
                                </div>
                            </div>
                        </div>
                        {/* TABELA 1 */}
                        {/* id=teste vem do menu do lado */}
                        <div className="table-responsive">
                            <table className="table table-data2">
                                <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>description</th>
                                        <th>date</th>
                                        <th>status</th>
                                        <th>price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr-shadow">
                                        <td>Lori Lynch</td>
                                        <td>
                                            <span className="block-email">lori@example.com</span>
                                        </td>
                                        <td className="desc">Samsung S8 Black</td>
                                        <td>2018-09-27 02:12</td>
                                        <td>
                                            <span className="status--process">Processed</span>
                                        </td>
                                        <td>$679.00</td>
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
                                    <tr className="spacer"></tr>
                                    <tr className="tr-shadow">
                                        <td>Lori Lynch</td>
                                        <td>
                                            <span className="block-email">john@example.com</span>
                                        </td>
                                        <td className="desc">iPhone X 64Gb Grey</td>
                                        <td>2018-09-29 05:57</td>
                                        <td>
                                            <span className="status--process">Processed</span>
                                        </td>
                                        <td>$999.00</td>
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
                                    <tr className="spacer"></tr>
                                    <tr className="tr-shadow">
                                         
                                        <td>Lori Lynch</td>
                                        <td>
                                            <span className="block-email">lyn@example.com</span>
                                        </td>
                                        <td className="desc">iPhone X 256Gb Black</td>
                                        <td>2018-09-25 19:03</td>
                                        <td>
                                            <span className="status--denied">Denied</span>
                                        </td>
                                        <td>$1199.00</td>
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
                                    <tr className="spacer"></tr>
                                    <tr className="tr-shadow">
                                         
                                        <td>Lori Lynch</td>
                                        <td>
                                            <span className="block-email">doe@example.com</span>
                                        </td>
                                        <td className="desc">Camera C430W 4k</td>
                                        <td>2018-09-24 19:10</td>
                                        <td>
                                            <span className="status--process">Processed</span>
                                        </td>
                                        <td>$699.00</td>
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
                        <div className="col-lg-12 tablePagination">
                                
                                <input type='radio' name="pages" />
                                <input type='radio' name="pages" />
                                <input type='radio' name="pages" />
                                <input type='radio' name="pages" />
                                
                        </div>
                        {/* TABELA 2 */}
                        <h3 className="title-5 m-b-35 text-light table-h3">Processador</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-left">
                                <div className="rs-select2--light rs-select2--md">
                                    <select className="js-select2 selectFilter" name="property">
                                        <option selected>All Properties</option>
                                        <option value="">Option 1</option>
                                        <option value="">Option 2</option>
                                    </select>
                                    <div className="dropDownSelect2"></div>
                                </div>
                                <div className="rs-select2--light rs-select2--sm ">
                                    <select className="js-select2 selectFilter" name="time">
                                        <option selected>Today</option>
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
                                        <option selected>Export</option>
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
                                    <tr className="">
                                        <th>Nome</th>
                                        <th>Fabricante</th>
                                        <th>Modelo</th>
                                        <th>Preço</th>
                                        <th>Soquete</th>
                                        <th>Nº de Núcleos</th>
                                        <th>Nº de Threads</th>
                                        <th>Frequência</th>
                                        <th>Frequência Máxima com Boost</th>
                                        <th>TDP</th>
                                        <th>Overclock</th>
                                        <th>Gráfico Integrado</th>
                                        <th>Tipo de Memória</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr-shadow">
                                        <td>Intel Xeon Gold</td>
                                        <td>
                                            Intel
                                        </td>
                                        <td className="desc">Xeon Gold 6330</td>
                                        <td>R$18.709,99</td>
                                        <td>LGA 4189</td>
                                        <td>28</td>
                                        <td>56</td>
                                        <td>2.00 GHz</td>
                                        <td>3.10 GHz</td>
                                        <td>205W</td>
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
                                    <tr className="tr-shadow">
                                        <td>Intel I5 10400F</td>
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
                        <div className="col-lg-12 tablePagination">
                                
                                <input type='radio' name="pages" />
                                <input type='radio' name="pages" />
                                <input type='radio' name="pages" />
                                <input type='radio' name="pages" />
                                
                        </div>


                        {/* TABELA 3 */}
                        <h3 className="title-5 m-b-35 text-light table-h3">Armazenamento</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-left">
                                <div className="rs-select2--light rs-select2--md">
                                    <select className="js-select2 selectFilter" name="property">
                                        <option selected>All Properties</option>
                                        <option value="">Option 1</option>
                                        <option value="">Option 2</option>
                                    </select>
                                    <div className="dropDownSelect2"></div>
                                </div>
                                <div className="rs-select2--light rs-select2--sm ">
                                    <select className="js-select2 selectFilter" name="time">
                                        <option selected>Today</option>
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
                                        <option selected>Export</option>
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
                                        <th>Nome</th>
                                        <th>Fabricante</th>
                                        <th>Modelo</th>
                                        <th>Preço</th>
                                        <th>Tipo</th>
                                        <th>Capacidade</th>
                                        <th>Velocidade de Leitura</th>
                                        <th>Velocidade de Escrita</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr-shadow">
                                         
                                        <td>SSD 960 GB Kingston A400</td>
                                        <td>Kingston</td>
                                        <td>SA400S37/960G</td>
                                        <td>R$439,99</td>
                                        <td>SSD SATA</td>
                                        <td>960 GB</td>
                                        <td>500MB/s</td>
                                        <td>450MB/s</td>
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
                                    <tr className="spacer"></tr>
                                    <tr className="tr-shadow">
                                         
                                        <td>HD Seagate 4TB BarraCuda</td>
                                        <td>Seagate</td>
                                        <td>ST4000DM004</td>
                                        <td>R$469,99</td>
                                        <td>HD SATA</td>
                                        <td>4TB</td>
                                        <td>5400 RPM</td>
                                        <td> - </td>
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
                                    <tr className="spacer"></tr>
                                    <tr className="tr-shadow">
                                         
                                        <td>Lori Lynch</td>
                                        <td>
                                            <span className="block-email">lyn@example.com</span>
                                        </td>
                                        <td className="desc">iPhone X 256Gb Black</td>
                                        <td>2018-09-25 19:03</td>
                                        <td>
                                            <span className="status--denied">Denied</span>
                                        </td>
                                        <td>$1199.00</td>
                                        <td>$1199.00</td>
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
                                    <tr className="spacer"></tr>
                                    <tr className="tr-shadow">
                                         
                                        <td>Lori Lynch</td>
                                        <td>
                                            <span className="block-email">doe@example.com</span>
                                        </td>
                                        <td className="desc">Camera C430W 4k</td>
                                        <td>2018-09-24 19:10</td>
                                        <td>
                                            <span className="status--process">Processed</span>
                                        </td>
                                        <td>$699.00</td>
                                        <td>$699.00</td>
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
                        <div className="col-lg-12 tablePagination">
                                
                                <input type='radio' name="pages" />
                                <input type='radio' name="pages" />
                                <input type='radio' name="pages" />
                                <input type='radio' name="pages" />
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default DashboardComponents
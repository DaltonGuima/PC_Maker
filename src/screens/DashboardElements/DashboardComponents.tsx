function DashboardComponents(){
    return(
        <div className="main-content">
        <div className="section__content section__content--p30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {/* TABELA 2 */}
                        <h3 className="title-5 m-b-35 text-light table-h3">Processador</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-left">
                                <div className="rs-select2--light rs-select2--md">
                                    <select className="js-select2 selectFilter" name="property">
                                        <option >Pag 1</option>
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
                                        <td>Xeon Gold 6330</td>
                                        <td>Intel</td>
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

                    {/* TABELA 3 */}
                    <h3 className="title-5 m-b-35 text-light table-h3">Armazenamento</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-left">
                                <div className="rs-select2--light rs-select2--md">
                                    <select className="js-select2 selectFilter" name="property">
                                        <option >Pag 1</option>
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
                                        <td className="desc">SA400S37/960G</td>
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
                                        <td className="desc">ST4000DM004</td>
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
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    {/* TABELA 4 */}
                    <h3 className="title-5 m-b-35 text-light table-h3">Mouse</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-left">
                                <div className="rs-select2--light rs-select2--md">
                                    <select className="js-select2 selectFilter" name="property">
                                        <option >Pag 1</option>
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
                                        <th>Nome</th>
                                        <th>Fabricante</th>
                                        <th>Modelo</th>
                                        <th>Preço</th>
                                        <th>Nº de Botões</th>
                                        <th>Tipo de Conexão</th>
                                        <th>Comprimento do Cabo</th>
                                        <th>DPI</th>
                                        <th>Sensor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr-shadow">
                                         
                                        <td>Razer Deathadder V2 Chroma</td>
                                        <td>Razer</td>
                                        <td className="desc">Deathadder V2</td>
                                        <td>R$269,90</td>
                                        <td>8</td>
                                        <td>Fio</td>
                                        <td>2,1 metros</td>
                                        <td>20000</td>
                                        <td>Focus+</td>
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
                                </tbody>
                            </table>
                        </div>

                    
                    {/* TABELA 5 */}
                    <h3 className="title-5 m-b-35 text-light table-h3">Placa de Vídeo</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-left">
                                <div className="rs-select2--light rs-select2--md">
                                    <select className="js-select2 selectFilter" name="property">
                                        <option >Pag 1</option>
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
                                        <th>Nome</th>
                                        <th>Fabricante</th>
                                        <th>Modelo</th>
                                        <th>Preço</th>
                                        <th>Clock</th>
                                        <th>Memória</th>
                                        <th>Clock da Memória</th>
                                        <th>Barramento</th> 
                                        <th>Conectore</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr-shadow">
                                         
                                        <td>RX 570 4GB RedDragon</td>
                                        <td>PowerColor</td>
                                        <td className="desc">AXRX 570 4GBD5-DHDV3/OC</td>
                                        <td>R$1100,00</td>
                                        <td>1250 MHz</td>
                                        <td>4GB GDDR5</td>
                                        <td>1500 MHz x4</td>
                                        <td>256Bit</td>
                                        <td>1 x 8Pin</td>
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
                                </tbody>
                            </table>
                        </div>


                </div>
            </div>
        </div>
    </div>

    )
}

export default DashboardComponents
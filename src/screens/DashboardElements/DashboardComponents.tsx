import { TableRead } from "../../components/TableRead"
import { Processador } from "../../components/TableRead/Datas/Processador"

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
                                    <tr className="spacer"></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-12">
                    
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
                    <div className="col-md-12">
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
                    </div>
                    <div className="col-md-12">
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

                                    <tr className="tr-shadow">
                                        <td>Asus NVIDIA GeForce GTX 1050 Ti OC Cerberus</td>
                                        <td>ASUS</td>
                                        <td className="desc">CERBERUS-GTX1050TI-O4G</td>
                                        <td>R$1.199,99</td>
                                        <td>1455 MHz</td>
                                        <td>4GB GDDR5</td>
                                        <td>7008 Mhz</td>
                                        <td>128 bits</td>
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
                                        
                                        <td>Asus GeForce RTX 3050 OC</td>
                                        <td>Asus</td>
                                        <td className="desc">DUAL-RTX3050-O8G</td>
                                        <td>R$2.599,99</td>
                                        <td>1852 MHz</td>
                                        <td>8GB GDDR6</td>
                                        <td>14 Gbps</td>
                                        <td>128 bits</td>
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


                    <div className="col-md-12">
                    {/* TABELA 6 */}
                    <h3 className="title-5 m-b-35 text-light table-h3">Memória RAM</h3>
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
                                        <th>Fabricante</th>
                                        <th>Modelo</th>
                                        <th>Preço</th>
                                        <th>Capacidade</th>
                                        <th>Velocidade</th>
                                        <th>Tecnologia</th>
                                        <th>Voltagem</th>
                                        <th>Latência</th> 
                                        <th>Notebook?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr-shadow">
                                        <td>Husky Technologies</td>
                                        <td>HTCQ003</td>
                                        <td className="desc">R$379,99</td>
                                        <td>16 GB</td>
                                        <td>2666 MHz</td>
                                        <td>DDR4</td>
                                        <td>1.2V ~ 1.35V</td>
                                        <td>19 (CL19)</td>
                                        <td className="text--process">Sim</td>
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
                                        <td>XPG</td>
                                        <td>Gammix D30</td>
                                        <td className="desc">R$329,99</td>
                                        <td>8 GB</td>
                                        <td>3200MHz</td>
                                        <td>DDR4</td>
                                        <td>1,2 V ~ 1,35 V</td>
                                        <td>CL 19-19-19</td>
                                        <td className="status--denied">Não</td>
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
                                        
                                        <td></td>
                                        <td></td>
                                        <td className="desc"></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
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
                    
                    <TableRead
                        key={'Processador'}
                        cols={['Nome','Fabricante','Modelo','Preço','Soquete','Nº de Núcleos',
                        'Nº de Threads','Frequência','Frequência máxima com Boost','TDP','OverClock',
                        'Gráfico integrado','Tipo de memória','Status'] }
                        titulo='Processador'
                        body={[<Processador
                            key={'1'}
                            id={'1'}
                            nome="Xeon Gold 6330"
                            fabricante="Intel"
                            modelo="Xeon Gold 6330"
                            preco={18709.99}
                            soquete='LGA 4189'
                            nNucleos={28}
                            nThreads={58}
                            frequencia={2.00}
                            freBoost={3.10}
                            tdp={205}
                            overClock={false}
                            graficoIntregado={false}
                            tipoMemoria='DD4'
                            status
                        />,<Processador
                            key={'2'}
                            id={'2'}
                            nome="Xeon Gold 6330"
                            fabricante="Intel"
                            modelo="Xeon Gold 6330"
                            preco={18709.99}
                            soquete='LGA 4189'
                            nNucleos={28}
                            nThreads={58}
                            frequencia={2.00}
                            freBoost={3.10}
                            tdp={205}
                            overClock={false}
                            graficoIntregado={false}
                            tipoMemoria='DD4'
                            status
                        />]}
                    />
                    

                    
                

                </div>
            </div>
            
        </div>
    </div>

    )
}

export default DashboardComponents
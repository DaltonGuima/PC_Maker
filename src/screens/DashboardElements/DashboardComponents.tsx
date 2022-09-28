import { TableRead } from "../../components/TableRead"
import { Gabinete } from "../../components/TableRead/Datas/Gabinete"
import { Processador } from "../../components/TableRead/Datas/Processador"
import { Mouse } from "../../components/TableRead/Datas/Mouse"
import { Armazenamento } from "../../components/TableRead/Datas/Armazenamento"
import { Ram } from "../../components/TableRead/Datas/ram"
import { Gpu } from "../../components/TableRead/Datas/Gpu"
import { Psu } from "../../components/TableRead/Datas/Psu"

function DashboardComponents() {
    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row"></div>
                    <TableRead
                        key={'Processador'}
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Soquete', 'Nº de Núcleos',
                            'Nº de Threads', 'Frequência', 'Frequência máxima com Boost', 'TDP', 'OverClock',
                            'Gráfico integrado', 'Tipo de memória','Vendedor', 'Status']}
                        titulo='Processador'
                        body={[<Processador
                            key={'1'}
                            id={'1'}
                            nome="AMD Ryzen 5 5600"
                            fabricante="AMD"
                            modelo="100-100000927BOX"
                            preco={999.99}
                            soquete='AM4'
                            nNucleos={6}
                            nThreads={12}
                            frequencia={4.4}
                            freBoost={3.5}
                            tdp={205}
                            overClock={true}
                            graficoIntregado={false}
                            tipoMemoria='DDR4'
                            vendedor={'Kabum'}
                            status
                        />, <Processador
                            key={'2'}
                            id={'2'}
                            nome="Intel Core i5-10400F"
                            fabricante="Intel"
                            modelo="BX8070110400F"
                            preco={959.99}
                            soquete='LFCLGA1200'
                            nNucleos={6}
                            nThreads={12}
                            frequencia={2.90}
                            freBoost={4.30}
                            tdp={65}
                            overClock={false}
                            graficoIntregado={false}
                            tipoMemoria='DDR4'
                            vendedor={'PICHAU'}
                            status
                        />]}
                    />
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
                                        <th>Conector</th>
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
                                        <td>128Bit</td>
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
                                        <td>128Bit</td>
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

                    <TableRead
                        key={'Gabinete'}
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Tipo', 'Vendedor','Status']}
                        titulo='Gabinete'
                        body={[<Gabinete
                            key={'1'}
                            id={'1'}
                            nome="AMD Ryzen 5 5600"
                            fabricante="AMD"
                            modelo="100-100000927BOX"
                            preco={999.99}
                            tipo={'Full Tower'}
                            vendedor={'KABUM'}
                            status
                        />]}
                    />
                  <TableRead             
                        key={'Armazenamento'}
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Tipo', 'Capacidade','velescrita','velleitura','Vendedor', 'Status']}
                        titulo='Armazenamento'
                        body={[<Armazenamento
                            key={'1'}
                            id={'1'}
                            nome="SSD 960 GB Kingston A400"
                            fabricante="Kingston"
                            modelo="A400"
                            preco={439.99}
                            tipo={'SSD SATA'}
                            capacidade={960}
                            velEscrita={450}
                            velLeitura={500}
                            vendedor={'KABUM'}
                            status
                        />]}
                    />
                    <TableRead             
                        key={'Mouse'}
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço','Vendedor','Status']}
                        titulo='Mouse'
                        body={[<Mouse
                            key={'1'}
                            id={'1'}
                            nome="Razer Deathadder V2 Chroma"
                            fabricante="Razer"
                            modelo="Deathadder V2"
                            preco={269.90}
                            vendedor={'KABUM'}
                            status
                        />]}
                    />
                    <TableRead             
                        key={'Ram'}
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço','Capacidade', 'Velocidade','Tecnologia','Voltagem','Latência','Notebook', 'Vendedor', 'Status']}
                        titulo='Mémoria Ram'
                        body={[<Ram
                            key={'1'}
                            id={'1'}
                            nome="Husky Technologies"
                            fabricante="Husky Technologies"
                            modelo="HTCQ003"
                            preco={379.99}
                            capacidade={16}
                            velocidade={2666}
                            tecnologia={'DDR4'}
                            voltagem={'1.2V~1.35V'}
                            latencia={'CL 19'}
                            notebook={true}
                            vendedor={'KABUM'}
                            status 
                        />]}
                    />
                    <TableRead             
                        key={'Gpu'}
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Clock', 'Memória','Clock Memória','Barramento','Conector','Vendedor', 'Status']}
                        titulo='Gpu'
                        body={[<Gpu
                            key={'1'}
                            id={'1'}
                            nome="RX 570 4GB RedDragon"
                            fabricante="RedDragon"
                            modelo="RX 570"
                            preco={1100.00}
                            clock={1250}
                            memoria={'4GB GDDR5'}
                            clmemoria={'1500 Mhz x 4'}
                            barramento={256}
                            conector={'1 x 8 Pin'}
                            vendedor={'KABUM'}
                            status 
                        />]}
                    />
                    <TableRead             
                        key={'Psu'}
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Potência', 'Certificação','PFC Ativo','Tamanho da ventoinha','Conector Principal','Conector CPU','Conector PCIe','Conector SATA','Vendedor','Status']}
                        titulo='Fonte'
                        body={[<Psu
                            key={'1'}
                            id={'1'}
                            nome="FONTE GAMER AZZA, PSAZ-650W-ARGB"
                            fabricante="AZZA"
                            modelo="PSAZ-650W-ARGB"
                            preco={269.90}
                            potencia={650}
                            certificacao={'80PLUS® Bronze'}
                            pfc={''}
                            ventoinha={120}
                            conPrincipal={'AC 100V/240V'}
                            conCPU={'EPS 8 pin (4+4)'}
                            conPCIe={'PCI-E 8 pin (6+2)'}
                            conSATA={'5x Conectores SATA'}
                            vendedor = {'PICHAU'}
                            status 
                        />]}
                    />
                </div>
            </div>

        </div>


    )
}

export default DashboardComponents
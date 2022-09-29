import { TableRead } from "../../components/TableRead"
import { Gabinete } from "../../components/TableRead/Datas/componentes/Gabinete"
import { Processador } from "../../components/TableRead/Datas/componentes/Processador"
import { Mouse } from "../../components/TableRead/Datas/componentes/Mouse"
import { Armazenamento } from "../../components/TableRead/Datas/componentes/Armazenamento"
import { Ram } from "../../components/TableRead/Datas/componentes/Ram"
import { Gpu } from "../../components/TableRead/Datas/componentes/Gpu"
import { Psu } from "../../components/TableRead/Datas/componentes/Psu"

function DashboardComponents() {
    const tipoCRUD = 'componentes';

    function Navegacao() {
        const localConst = document.getElementById('Navegador') as HTMLSelectElement
        const localId = document.getElementById(localConst.value) as HTMLElement
        localId.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="col-12">
                    <h3 className="title-5 m-b-35 text-light table-h3">Escolha o Componente</h3>
                    <div className="table-data__tool">
                        <div className="table-data__tool-left">
                            <div className="rs-select2--light rs-select2--md">
                                <select onChange={Navegacao} className="js-select2 selectFilter" name="property" id='Navegador' defaultValue={''}>
                                    <option value="" className='text-secondary' disabled>Escolha um</option>
                                    <option value="processador">Processador</option>
                                    <option value="armazenamento">Armazenamento</option>
                                    <option value="gpu">Placa de Vídeo</option>
                                    <option value="memoria-ram">Memória RAM</option>
                                    <option value="placa-mae">Placa-mãe</option>
                                    <option value="fonte-de-alimentacao">Fonte</option>
                                    <option value="gabinete">Gabinete</option>
                                    <option value="placa-de-captura">Placa de Captura</option>
                                    <option value="mouse">Mouse</option>
                                    <option value="teclado">Teclado</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row"></div>
                    <TableRead
                        tipoCRUD={tipoCRUD}
                        key={'Processador'}
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Soquete', 'Nº de Núcleos',
                            'Nº de Threads', 'Frequência', 'Frequência máxima com Boost', 'TDP', 'OverClock',
                            'Gráfico integrado', 'Tipo de memória', 'Vendedor', 'LinkProduto', '']}
                        id='Processador'
                        insereDados
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
                            linkProduto='https://theuselessweb.com/'

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
                            linkProduto='https://theuselessweb.com/'

                        />]}
                    />
                    <TableRead
                        tipoCRUD={tipoCRUD}
                        key={'Gabinete'}
                        id='Gabinete'
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Tipo', 'Vendedor', '']}
                        insereDados
                        body={[<Gabinete
                            key={'1'}
                            id={'1'}
                            nome="AMD Ryzen 5 5600"
                            fabricante="AMD"
                            modelo="100-100000927BOX"
                            preco={999.99}
                            tipo={'Full Tower'}
                            vendedor={'KABUM'}
                            linkProduto='https://theuselessweb.com/'
                        />]}
                    />
                    <div id="armazenamento">
                        <TableRead
                            tipoCRUD={tipoCRUD}
                            key={'Armazenamento'}
                            cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Tipo', 'Capacidade', 'velescrita', 'velleitura', 'Vendedor', '']}
                            id='Armazenamento'
                            insereDados
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
                                linkProduto='https://theuselessweb.com/'


                            />, <Armazenamento
                                key={'2'}
                                id={'2'}
                                nome="HD Seagate 4TB BarraCuda"
                                fabricante="Seagate"
                                modelo="ST4000DM004"
                                preco={469.99}
                                tipo={'HDD SATA'}
                                capacidade={4000}
                                velEscrita={5400}
                                vendedor={'KABUM'}
                                linkProduto='https://theuselessweb.com/'

                            />]}
                        />
                    </div>
                    <TableRead
                        key={'Mouse'}
                        id='Mouse'
                        tipoCRUD={tipoCRUD}
                        insereDados
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Vendedor', '']}
                        body={[<Mouse
                            key={'1'}
                            id={'1'}
                            nome="Razer Deathadder V2 Chroma"
                            fabricante="Razer"
                            modelo="Deathadder V2"
                            preco={269.90}
                            vendedor={'KABUM'}
                            linkProduto='https://theuselessweb.com/'

                        />]}
                    />


                    <TableRead
                        tipoCRUD={tipoCRUD}
                        key={'Ram'}
                        id='Mémoria Ram'
                        insereDados
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Capacidade', 'Velocidade', 'Tecnologia', 'Voltagem', 'Latência', 'Notebook', 'Vendedor', '']}
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
                            linkProduto='https://theuselessweb.com/'

                        />]}
                    />


                    <TableRead
                        tipoCRUD={tipoCRUD}
                        key={'Gpu'}
                        id='Gpu'
                        insereDados
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Clock', 'Memória', 'Clock Memória', 'Barramento', 'Conector', 'Vendedor', 'Link Produto']}
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
                            linkProduto='https://theuselessweb.com/'

                        />, <Gpu
                            key={'2'}
                            id={'2'}
                            nome="Asus NVIDIA GeForce GTX 1050 Ti OC Cerberus"
                            fabricante="ASUS"
                            modelo="CERBERUS-GTX1050TI-O4G"
                            preco={1199.99}
                            clock={1455}
                            memoria={'4GB GDDR5'}
                            clmemoria={'7008 Mhz'}
                            barramento={128}
                            conector={' - '}
                            vendedor={'KABUM'}
                            linkProduto='https://theuselessweb.com/'

                        />, <Gpu
                            key={'3'}
                            id={'3'}
                            nome="Asus GeForce RTX 3050 OC"
                            fabricante="ASUS"
                            modelo="DUAL-RTX3050-O8G"
                            preco={2599.99}
                            clock={1852}
                            memoria={'8GB GDDR6'}
                            clmemoria={'14 Gbps'}
                            barramento={128}
                            conector={'1 x 8Pin'}
                            vendedor={'KABUM'}
                            linkProduto='https://theuselessweb.com/'

                        />]}

                    />
                    <TableRead
                        tipoCRUD={tipoCRUD}
                        key={'Psu'}
                        id='Fonte de Alimentação'
                        insereDados
                        cols={['Nome', 'Fabricante', 'Modelo', 'Preço', 'Potência', 'Certificação', 'PFC Ativo', 'Tamanho da ventoinha', 'Conector Principal', 'Conector CPU', 'Conector PCIe', 'Conector SATA', 'Vendedor', '']}
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
                            vendedor={'PICHAU'}
                            linkProduto='https://theuselessweb.com/'

                        />]}
                    />
                </div>
            </div>

        </div>
    )
}

export default DashboardComponents
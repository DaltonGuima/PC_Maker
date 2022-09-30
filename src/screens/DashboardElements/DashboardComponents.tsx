import { TableRead } from "../../components/TableRead"
import { Gabinete } from "../../components/TableRead/Datas/componentes/Gabinete"
import { Processador } from "../../components/TableRead/Datas/componentes/Processador"
import { Mouse } from "../../components/TableRead/Datas/componentes/Mouse"
import { Armazenamento } from "../../components/TableRead/Datas/componentes/Armazenamento"
import { Ram } from "../../components/TableRead/Datas/componentes/Ram"
import { Gpu } from "../../components/TableRead/Datas/componentes/Gpu"
import { Psu } from "../../components/TableRead/Datas/componentes/Psu"
import { CoolerBox } from "../../components/TableRead/Datas/componentes/CoolerBox"
import { SelectOption } from "../../components/SelectOptionComponent"
import { Teclado } from "../../components/TableRead/Datas/componentes/Teclado"
import { PlacaMae } from "../../components/TableRead/Datas/componentes/PlacaMae"
import { PlacaDeCaptura } from "../../components/TableRead/Datas/componentes/PlacaDeCaptura"
import { Monitor } from "../../components/TableRead/Datas/componentes/Monitor"
import { PlacaDeSom } from "../../components/TableRead/Datas/componentes/PlacaDeSom"
import { Ventoinha } from "../../components/TableRead/Datas/componentes/Ventoinha"


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
                <div className="container-fluid mt-3">
                    <h3 className="title-5 m-b-35 text-light table-h3">Escolha o Componente</h3>
                    <div className="table-data__tool">
                        <div className="table-data__tool-left">
                            <div className="rs-select2--light rs-select2--md">
                                <select onChange={Navegacao} className="js-select2 selectFilter" name="property" id='Navegador' defaultValue={''}>
                                    <SelectOption />
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
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Soquete', 'Nº de Núcleos',
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
                        key={'Armazenamento'}
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Tipo', 'Capacidade', 'velescrita', 'velleitura', 'Vendedor', 'Link Produto']}
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

                    <TableRead
                        tipoCRUD={tipoCRUD}
                        key={'Gpu'}
                        id='Placa de vídeo'
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Clock', 'Memória', 'Clock Memória', 'Barramento', 'Conector', 'Vendedor', 'Link Produto']}
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
                        key={'Ram'}
                        id='Mémoria Ram'
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Capacidade', 'Velocidade', 'Tecnologia', 'Voltagem', 'Latência', 'Notebook', 'Vendedor', 'Link Produto']}
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
                        key={'placa-mae'}
                        id='Placa-Mãe'
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Chipset', 'Soquete', 'Fator de Forma', 'TDP', 'Tecnologia RAM',
                            'Slots RAM', 'Capacidade Máxima de RAM', 'Gráfico Integrado',
                            'Slots M.2', 'Slots PCI Express x16', 'Slots PCI',
                            'Vendedor', 'Link Produto']}
                        body={[<PlacaMae
                            key={'1'}
                            id={'1'}
                            nome="B550M Aorus Elite,"
                            fabricante="Gigabyte"
                            modelo="B550M AORUS ELITE"
                            preco={899.00}
                            chipset="AMD B550"
                            soquete="AM4"
                            fatordeforma="mATX"
                            tdp=" - "
                            tecnologiaram="DDR4"
                            slotsram={4}
                            cmaxram={128}
                            graficoi="Sim"
                            slotsm2={2}
                            slotspciex16={2}
                            slotspci={3}
                            vendedor={'PICHAU'}
                            linkProduto='https://theuselessweb.com/' tipo={""}
                        />]}
                    />


                    <TableRead
                        tipoCRUD={tipoCRUD}
                        key={'Psu'}
                        id='Fonte de Alimentação'
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Potência', 'Certificação', 'PFC Ativo', 'Tamanho da ventoinha', 'Conector Principal', 'Conector CPU', 'Conector PCIe', 'Conector SATA', 'Vendedor', 'Link Produto']}
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

                    <TableRead
                        tipoCRUD={tipoCRUD}
                        key={'Gabinete'}
                        id='Gabinete'
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Tipo', 'Vendedor', 'Link Produto']}
                        insereDados
                        body={[<Gabinete
                            key={'1'}
                            id={'1'}
                            nome="Rise Mode Glass 06"
                            fabricante="Rise"
                            modelo="RM-WT-06-SF"
                            preco={199.99}
                            tipo={'Mid Tower'}
                            vendedor={'KABUM'}
                            linkProduto='https://theuselessweb.com/'
                        />]}
                    />

                    <TableRead
                        tipoCRUD={tipoCRUD}
                        key={'Placa de Captura'}
                        id='Placa de Captura'
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Interface', 'Saída', 'Taxa de Bits', 'Maior Resolução Suportada', 'Vendedor', 'Link Produto']}
                        insereDados
                        body={[<PlacaDeCaptura
                            key={'1'}
                            id={'1'}
                            nome="Placa de Captura Interna Elgato HD60 Pro"
                            fabricante="Elgato"
                            modelo="HD60 Pro"
                            preco={799.99}
                            interface="PCIe x1"
                            saida="HDMI"
                            taxadbit={60}
                            maioresupor="1080p60"
                            vendedor={'KABUM'}
                            linkProduto='https://theuselessweb.com/'
                        />]}
                    />


                    <TableRead
                        key={'Mouse'}
                        id='Mouse'
                        tipoCRUD={tipoCRUD}
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Nº de botões', 'DPI', 'Vendedor', 'Link Produto']}
                        body={[<Mouse
                            key={'1'}
                            id={'1'}
                            nome="G502 LIGHTSPEED"
                            fabricante="Logitech"
                            modelo="910-005631"
                            preco={579.99}
                            ndebotões={11}
                            dpi={25600}
                            vendedor={'KABUM'}
                            linkProduto='https://theuselessweb.com/'

                        />]}
                    />

                    <TableRead
                        key={'Teclado'}
                        id='Teclado'
                        tipoCRUD={tipoCRUD}
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Tipo', 'Tamanho', 'Vendedor', 'Link Produto']}
                        body={[<Teclado
                            key={'1'}
                            id={'1'}
                            nome="Teclado Gamer Pichau P421 RGB RAinbow"
                            fabricante="Pichau Gaming"
                            modelo="PGK-P421-RGB"
                            tipo="Membrana"
                            tamanho="Full size"
                            preco={89.90}
                            vendedor={'PICHAU'}
                            linkProduto='https://theuselessweb.com/'

                        />]}
                    />

                    <TableRead
                        key={'Cooler Box'}
                        id='Cooler Box'
                        tipoCRUD={tipoCRUD}
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Potência', 'Vendedor', 'Link Produto']}
                        body={[<CoolerBox
                            key={'1'}
                            id={'1'}
                            nome="Rise Mode X$"
                            fabricante="Rise Mode"
                            modelo="RM-ACX-04-RGB"
                            preco={34.99}
                            potencia={115}
                            vendedor={'KABUM'}
                            linkProduto='https://theuselessweb.com/'

                        />]}
                    />





                    <TableRead
                        key={'Ventoinha'}
                        id='Ventoinha'
                        tipoCRUD={tipoCRUD}
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Tamanho', 'Vendedor', 'Link Produto']}
                        body={[<Ventoinha
                            key={'1'}
                            id={'1'}
                            nome="PICHAU GAMING FEATHER"
                            fabricante="Pichau Gaming"
                            modelo="PGFEA-WHITE"
                            preco={19.90}
                            tamanho={120}
                            vendedor={'Pichau'}
                            linkProduto='https://theuselessweb.com/'

                        />]}
                    />

                    <TableRead
                        key={'Monitor'}
                        id='Monitor'
                        tipoCRUD={tipoCRUD}
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Resolução vertical', 'Taxa de Atualização', 'Tamanho', 'Vendedor', 'Link Produto']}
                        body={[<Monitor
                            key={'1'}
                            id={'1'}
                            nome="HQ LED 17.1' Widescreen"
                            fabricante="HQ"
                            modelo="17HQ-LED"
                            preco={350.10}
                            resolucaover="1440x900p"
                            taxadeatualiz={75}
                            tamanho={17.1}
                            vendedor={'KABUM'}
                            linkProduto='https://theuselessweb.com/'
                        />]}
                    />


                    <TableRead
                        key={'Placa de Som'}
                        id='Placa de Som'
                        tipoCRUD={tipoCRUD}
                        insereDados
                        cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Vendedor', 'Link Produto']}
                        body={[<PlacaDeSom
                            key={'1'}
                            id={'1'}
                            nome="Placa de Som - 5.1 Canais - PCI-E"
                            fabricante="Lotus"
                            modelo="PC0041"
                            preco={109.99}
                            vendedor={'OFICINA DOS BITS'}
                            linkProduto='https://theuselessweb.com/'
                        />]}
                    />

                </div>
            </div>

        </div>

    )
}

export default DashboardComponents
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom';

function DashboardInsercao() {
    const navigate = useNavigate();
    //Função para navegar
    function Navegacao() {

        const localConst = document.getElementById('Navegador') as HTMLSelectElement
        navigate(`/componentes/insercao/${localConst.value}`)
    }
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
                                    <select onChange={Navegacao} className="js-select2 selectFilter" name="property" id='Navegador'>
                                        <option value="">Escolha um</option>
                                        <option value="Processador">Processador</option>
                                        <option value="Armazenamento">Armazenamento</option>
                                        <option value="PlacaDeVideo">Placa de Vídeo</option>
                                        <option value="Ram">Memória RAM</option>
                                        <option value="Mobo">Placa-mãe</option>
                                        <option value="Psu">Fonte</option>
                                        <option value="Gabinete">Gabinete</option>
                                        <option value="Captura">Placa de Captura</option>
                                        <option value="mouse">Mouse</option>
                                    </select>
                                    <div className="dropDownSelect2"></div>
                                </div>
                                <button className="au-btn-filter">
                                    <i className="zmdi zmdi-filter-list"></i>filters
                                </button>
                            </div>
                        </div>
                    </div>

                    <Outlet />

                    {/* Formulário */}

                </div>
            </div>
        </div>

    )
}

export default DashboardInsercao
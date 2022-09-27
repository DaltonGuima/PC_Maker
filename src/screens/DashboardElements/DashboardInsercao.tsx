import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom';

function DashboardInsercao() {
    const navigate = useNavigate();
    //Função para navegar
    function Navegacao(){
        const localConst = document.getElementById('Navegador') as HTMLSelectElement
        
        switch (localConst.value){
            case 'Processador':
                navigate("/insercao/processador")
            break;
            case 'Armazenamento':
                navigate("/insercao/armazenamento")
            break;
            case 'Gpu':
                navigate("/insercao/gpu")
            break;
            default:
                navigate("/insercao")
        }
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
                                    {/* Botei id */}
                                    <select onChange={Navegacao} className="js-select2 selectFilter" name="property" id='Navegador'>
                                        <option value="">Escolha um</option>
                                        <option value="Processador">Processador</option>
                                        <option value="Armazenamento">Armazenamento</option>
                                        <option value="Gpu">Placa de Vídeo</option>
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
                                <i className="zmdi zmdi-filter-list"></i>filters
                                </button>

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
import { useEffect } from "react";
import { changeSelectValue } from "../../utils/changeSelectValue";

function DashboardInsercaoPlacaDeVideo() {

    useEffect(() => {
        changeSelectValue('placa-de-video')
    });

    return (
        <div style={{ paddingTop: '7rem' }}>


            <div className="col-lg-10 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Placa de Video</strong>
                    </div>
                    <div className="card-body card-block">
                        <form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Vendedor</label>
                                    <input type="text" name="nome-produto" placeholder="Vendedor" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome da empresa que vende o produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Link</label>
                                    <input type="text" name="nome-produto" placeholder="Link" className="form-control" />
                                    <small className="help-block form-text text-muted">Link url do produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="preco-input" className=" form-control-label">Preço</label>
                                    <input type="text" name="preco-input" placeholder="Preço" className="form-control" />
                                    <small className="help-block form-text">Preço do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome-produto" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante-processador" className=" form-control-label">Fabricante</label>
                                    <input type="text" name="fabricante-processador" placeholder="Fabricante" className="form-control" />
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>
                                <div className="col ">
                                    <label htmlFor="modelo-input" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo-input" placeholder="Modelo" className="form-control" />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Clock</label>
                                    <input type="email" name="email-input" placeholder="Clock" className="form-control" />
                                    <small className="help-block form-text">Frequência da unidade de processamento da GPU</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Memória</label>
                                    <input type="email" name="email-input" placeholder="Memória" className="form-control" />
                                    <small className="help-block form-text">Capacidade de Memória da GPU</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Clock de Memória</label>
                                    <input type="email" name="email-input" placeholder="Clock de Memória" className="form-control" />
                                    <small className="help-block form-text">Frequência da Memória da GPU, ou a Largura de banda</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Conectores</label>
                                    <input type="email" name="email-input" placeholder="Conectores" className="form-control" />
                                    <small className="help-block form-text">Conectores de alimentação</small>
                                </div>
                            </div>


                        </form>
                    </div>
                    <div className="card-footer">
                        <button className="au-btn au-btn-icon au-btn--purple au-btn--small">
                            <i className="zmdi zmdi-plus"></i>Adicionar</button>
                        <div className="rs-select2--dark rs-select2--sm rs-select2--dark2 ">
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default DashboardInsercaoPlacaDeVideo;
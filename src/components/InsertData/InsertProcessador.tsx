import { useEffect } from "react";
import { changeSelectValue } from "../../script/changeSelectValue";

function DashboardInsercaoProcessador() {

    useEffect(() => {
        changeSelectValue('processador')
    });

    return (
        <div style={{ paddingTop: '7rem' }}>

            <div className="col-lg-10 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Processador</strong>
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
                                    <label className=" form-control-label">Fabricante</label>
                                    <div className="form-check">
                                        <div className="radio">
                                            <label htmlFor="radio1" className="form-check-label">
                                                <input type="radio" id="radio1" name="radios" value="intel" className="form-check-input" />Intel
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label htmlFor="radio2" className="form-check-label">
                                                <input type="radio" id="radio2" name="radios" value="amd" className="form-check-input" />AMD
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Tipo de Memória</label>
                                    <div className="col col">
                                        <div className="form-check">
                                            <div className="radio">
                                                <label htmlFor="radio1" className="form-check-label ">
                                                    <input type="radio" id="radio1" name="radios" value="DDR3" className="form-check-input" />DDR3
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label htmlFor="radio2" className="form-check-label ">
                                                    <input type="radio" id="radio2" name="radios" value="DDR4" className="form-check-input" />DDR4
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label htmlFor="radio2" className="form-check-label ">
                                                    <input type="radio" id="radio2" name="radios" value="DDR5" className="form-check-input" />DDR5
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="modelo-input" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo-input" placeholder="Modelo" className="form-control" />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Soquete</label>
                                    <input type="text" name="text-input" placeholder="Soquete" className="form-control" />
                                    <small className="help-block form-text text-muted">Padrão de conexão de soquete</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">TDP</label>
                                    <input type="text" name="text-input" placeholder="TDP" className="form-control" />
                                    <small className="help-block form-text text-muted">Quantidade máxima de energia dissipada em calor, em Watts (W)</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Nº de Núcleos</label>
                                    <input type="text" name="text-input" placeholder="Nº de Núcleos" className="form-control" />
                                    <small className="help-block form-text text-muted">Quantidade de núcleos físicos</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Nº de Threads</label>
                                    <input type="text" name="text-input" placeholder="Nº de Threads" className="form-control" />
                                    <small className="help-block form-text text-muted">Quantidade de núcleos lógicos</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Frequência</label>
                                    <input type="text" name="text-input" placeholder="Frequência" className="form-control" />
                                    <small className="help-block form-text text-muted">Frequência base em megahertz (MHz)</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Frequência Máxima com Boost</label>
                                    <input type="text" name="text-input" placeholder="Frequência Máxima com Boost" className="form-control" />
                                    <small className="help-block form-text text-muted">Frequência máxima com boost em megahertz (MHz)</small>
                                </div>
                            </div>
                            <div className="col">
                                <br />
                                <label htmlFor="checkbox1" className="form-check-label">
                                    <input type="checkbox" id="checkbox1" name="checkbox1" value="overclock" className="form-check-input check" /> Desbloqueado para overclock
                                </label>
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
export default DashboardInsercaoProcessador
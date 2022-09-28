function DashboardInsercaoProcessador() {
    return (
        <div className="main-content">

            <div className="col-lg-6 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Processador</strong>
                    </div>
                    <div className="card-body card-block">
                        <form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="nome-produto" className=" form-control-label">Nome</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="nome-produto" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label className=" form-control-label">Fabricante</label>
                                </div>
                                <div className="col col-md-9">
                                    <div className="form-check">
                                        <div className="radio">
                                            <label htmlFor="radio1" className="form-check-label ">
                                                <input type="radio" id="radio1" name="radios" value="option1" className="form-check-input" />Intel
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label htmlFor="radio2" className="form-check-label ">
                                                <input type="radio" id="radio2" name="radios" value="option2" className="form-check-input" />AMD
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="modelo-input" className=" form-control-label">Modelo</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="modelo-input" placeholder="Modelo" className="form-control" />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="preco-input" className=" form-control-label">Preço</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="preco-input" placeholder="Preço" className="form-control" />
                                    <small className="help-block form-text">Preço do produto</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="text-input" className=" form-control-label">Soquete</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="text-input" placeholder="Soquete" className="form-control" />
                                    <small className="help-block form-text text-muted">Padrão de conexão de soquete</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="text-input" className=" form-control-label">Nº de Núcleos</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="text-input" placeholder="Nº de Núcleos" className="form-control" />
                                    <small className="help-block form-text text-muted">Quantidade de núcleos físicos</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="text-input" className=" form-control-label">Nº de Threads</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="text-input" placeholder="Nº de Threads" className="form-control" />
                                    <small className="help-block form-text text-muted">Quantidade de núcleos lógicos</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="text-input" className=" form-control-label">Frequência</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="text-input" placeholder="Frequência" className="form-control" />
                                    <small className="help-block form-text text-muted">Frequência base</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="text-input" className=" form-control-label">Frequência Máxima com Boost</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="text-input" placeholder="Frequência Máxima com Boost" className="form-control" />
                                    <small className="help-block form-text text-muted">Frequência máxima com boost</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="text-input" className=" form-control-label">TDP</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="text-input" placeholder="TDP" className="form-control" />
                                    <small className="help-block form-text text-muted">Quantidade máxima de energia dissipada em calor, em Watts (W)</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="text-input" className=" form-control-label">Overclock</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="text-input" placeholder="Overclock" className="form-control" />
                                    <small className="help-block form-text text-muted">Bloqueado ou Desbloqueado para overclock?</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="text-input" className=" form-control-label">Gráfico Integrado</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="text-input" placeholder="Gráfico Integrado" className="form-control" />
                                    <small className="help-block form-text text-muted">Tem gráfico integrado?</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="text-input" className=" form-control-label">Tipo de Memória</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="text-input" placeholder="Tipo de Memória" className="form-control" />
                                    <small className="help-block form-text text-muted">Tipo de memória RAM suportada (DDR4, DDR5, etc)</small>
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
export default DashboardInsercaoProcessador
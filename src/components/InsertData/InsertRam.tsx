function DashboardInsercaoRam() {
    return (
        <div className="main-content">

            <div className="col-lg-6 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Memória RAM</strong>
                    </div>
                    <div className="card-body card-block">
                        <form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="nome-processador" className=" form-control-label">Nome</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="nome-processador" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="fabricante-processador" className=" form-control-label">Fabricante</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="fabricante-processador" placeholder="Fabricante" className="form-control" />
                                    <small className="help-block form-text">Nome do fabricante</small>
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
                                    <label htmlFor="email-input" className=" form-control-label">Capacidade</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Capacidade" className="form-control" />
                                    <small className="help-block form-text">Capacidade da memória</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Velocidade</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Velocidade" className="form-control" />
                                    <small className="help-block form-text">Frequência padrão em que opera</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label className=" form-control-label">Tecnologia RAM</label>
                                </div>
                                <div className="col col-md-9">
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
                                        <small className="help-block form-text">Tipo de Tecnologia RAM suportado</small>
                                    </div>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Voltagem</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Voltagem" className="form-control" />
                                    <small className="help-block form-text">Voltagem padrão em que opera</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Latência</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Latência" className="form-control" />
                                    <small className="help-block form-text">Latência padrão em que opera</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Notebook?</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Notebook?" className="form-control" />
                                    <small className="help-block form-text">É uma memória específica para notebooks?</small>
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
export default DashboardInsercaoRam
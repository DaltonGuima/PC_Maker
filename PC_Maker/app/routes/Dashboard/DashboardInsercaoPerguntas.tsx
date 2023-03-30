function DashboardInsercaoPerguntas() {

    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <h3 className="title-5 m-b-35 text-light table-h3">Inserção de Perguntas</h3>
                    </div>


                    {/* Formulário */}
                    <div className="main-content" style={{ paddingTop: '7rem' }}>

                        <div className="col-lg-11 tabela-insercao">
                            <div className="card card-dash">
                                <div className="card-header">
                                    <strong>Perguntas</strong>
                                </div>
                                <div className="card-body card-block">
                                    <form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="nome-produto" className=" form-control-label">Pergunta</label>
                                                <input type="text" name="nome-produto" placeholder="Vendedor" className="form-control" />
                                                <small className="help-block form-text text-muted">O que vai ser perguntado</small>
                                            </div>

                                            <div className="col">
                                                <label className=" form-control-label">Somente uma resposta?</label>
                                                <div className="form-check">
                                                    <div className="radio">
                                                        <label htmlFor="radio1" className="form-check-label ">
                                                            <input type="radio" id="radio1" name="radios" value="DDR3" className="form-check-input" />Sim
                                                        </label>
                                                    </div>
                                                    <div className="radio">
                                                        <label htmlFor="radio2" className="form-check-label ">
                                                            <input type="radio" id="radio2" name="radios" value="DDR4" className="form-check-input" />Não
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <h3 className="form-control-label my-4">Alternativas</h3>
                                            <div className="col-2">
                                                <label htmlFor="nome-produto" className=" form-control-label">Alternativa 1</label>
                                                <input type="text" name="nome-produto" placeholder="Vendedor" className="form-control" />
                                                <small className="help-block form-text text-muted">O que vai ser perguntado</small>
                                            </div>
                                            <div className="col-2">
                                                <label htmlFor="nome-produto" className=" form-control-label">Alternativa 2</label>
                                                <input type="text" name="nome-produto" placeholder="Vendedor" className="form-control" />
                                                <small className="help-block form-text text-muted">O que vai ser perguntado</small>
                                            </div>
                                            <div className="col-2">
                                                <label htmlFor="nome-produto" className=" form-control-label">Alternativa 3</label>
                                                <input type="text" name="nome-produto" placeholder="Vendedor" className="form-control" />
                                                <small className="help-block form-text text-muted">O que vai ser perguntado</small>
                                            </div>
                                            <div className="col-2">
                                                <label htmlFor="nome-produto" className=" form-control-label">Alternativa 4</label>
                                                <input type="text" name="nome-produto" placeholder="Vendedor" className="form-control" />
                                                <small className="help-block form-text text-muted">O que vai ser perguntado</small>
                                            </div>
                                            <div className="col-2">
                                                <label htmlFor="nome-produto" className=" form-control-label">Alternativa 5</label>
                                                <input type="text" name="nome-produto" placeholder="Vendedor" className="form-control" />
                                                <small className="help-block form-text text-muted">O que vai ser perguntado</small>
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

                </div>
            </div>
        </div>

    )
}

export default DashboardInsercaoPerguntas
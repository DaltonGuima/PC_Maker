function DashboardInsercaoArmazenamento() {
    return (
        <div className="main-content">
            <div className="col-lg-6 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Armazenamento</strong>
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
                                    <label htmlFor="selectSm" className=" form-control-label">Tipo</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                                        <option selected value="" disabled>Selecione</option>
                                        <option value="HDD-SATA">HDD SATA</option>
                                        <option value="SSD-SATA">SSD SATA</option>
                                        <option value="SSD-M.2">SSD M.2</option>
                                        <option value="USB">USB</option>
                                    </select>
                                    <small className="help-block form-text">Tipo de dispositivo e conexão</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Capacidade</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="email-input" placeholder="Capacidade" className="form-control" />
                                    <small className="help-block form-text">Capacidade de armazenamento</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Velocidade de Leitura</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="email-input" placeholder="Velocidade de Leitura" className="form-control" />
                                    <small className="help-block form-text">Velocidade de Leitura ou RPM</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Velocidade de Escrita</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="text" name="email-input" placeholder="Velocidade de Escrita" className="form-control" />
                                    <small className="help-block form-text">Velocidade de Escrita</small>
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
export default DashboardInsercaoArmazenamento
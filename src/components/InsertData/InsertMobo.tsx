function DashboardInsercaoMobo() {
    return (
        <div className="main-content">

            <div className="col-lg-6 tabela-insercao">
                <div className="card">
                    <div className="card-header">
                        <strong>Placa-mãe</strong>
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
                                    <label htmlFor="email-input" className=" form-control-label">Chipset</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Chipset" className="form-control" />
                                    <small className="help-block form-text">Chipset</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Soquete</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Soquete" className="form-control" />
                                    <small className="help-block form-text">Soquete</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="selectSm" className=" form-control-label">Fator de forma</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                                        <option selected value="" disabled>Selecione</option>
                                        <option value="mATX">mATX</option>
                                        <option value="ATX">ATX</option>
                                        <option value="EATX">EATX</option>
                                        <option value="Mini-ITX">Mini-ITX</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">TDP</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="TDP" className="form-control" />
                                    <small className="help-block form-text">TDP do soquete</small>
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
                                    <label htmlFor="email-input" className=" form-control-label">Slots RAM</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Slots RAM" className="form-control" />
                                    <small className="help-block form-text">Quantidadede Slots RAM</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Soquete</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Soquete" className="form-control" />
                                    <small className="help-block form-text">Soquete</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Capacidade Máxima de RAM</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Capacidade Máxima de RAM" className="form-control" />
                                    <small className="help-block form-text">Capacidade Máxima de RAM</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Gráfico Integrado</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Gráfico Integrado" className="form-control" />
                                    <small className="help-block form-text">Modelo do gráfico integrado</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Portas SATA</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Quantidade de Portas SATA" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Portas SATA</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Slots M.2</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Quantidade de Slots M.2" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Slots M.2</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Slots PCI Express x16</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Quantidade de Slots PCI Express x16" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Slots PCI Express x16</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Slots PCI</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Quantidade de Slots PCI" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Slots PCI</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Conector de alimentação principal</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Conector de alimentação principal" className="form-control" />
                                    <small className="help-block form-text">Conector de alimentação principal (ATX 24 pinos, etc)</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Conector de alimentação 12V</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Conector de alimentação 12V" className="form-control" />
                                    <small className="help-block form-text">Conector de alimentação 12V (4+4 pinos, 6 pinos, etc)</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Conector de ventoinha do processador</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Conector de ventoinha do processador" className="form-control" />
                                    <small className="help-block form-text">Conector de ventoinha do processador (2 pinos, 4 pinos, etc)</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Conector de ventilador do sistema</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Conector de ventilador do sistema" className="form-control" />
                                    <small className="help-block form-text">Conector de ventilador do sistema (1, 2, etc)</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-3">
                                    <label htmlFor="email-input" className=" form-control-label">Conector de video</label>
                                </div>
                                <div className="col-12 col-md-9">
                                    <input type="email" name="email-input" placeholder="Conector de video" className="form-control" />
                                    <small className="help-block form-text">Conector de video (HDMI, VGA, Display Port, etc)</small>
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
export default DashboardInsercaoMobo;
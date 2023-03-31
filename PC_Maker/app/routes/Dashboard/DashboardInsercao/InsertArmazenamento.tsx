import { useEffect } from "react";
import { changeSelectValue } from "../../../script/changeSelectValue";

function DashboardInsercaoArmazenamento() {
    useEffect(() => {
        changeSelectValue('armazenamento')
    });
    return (
        <div style={{ paddingTop: '7rem' }}>

            <div className="col-lg-10 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Armazenamento</strong>
                    </div>
                    <div className="card-body card-block">
                        <form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="vendedor-produto" className=" form-control-label">Vendedor</label>
                                    <input type="text" name="vendedor-produto" id="vendedor-produto" placeholder="Vendedor" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome da empresa que vende o produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="link-produto" className=" form-control-label">Link</label>
                                    <input type="text" name="link-produto" id="link-produto" placeholder="Link" className="form-control" />
                                    <small className="help-block form-text text-muted">Link url do produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="preco-input" className=" form-control-label">Preço</label>
                                    <input type="text" name="preco-input" id="preco-produto" placeholder="Preço" className="form-control" />
                                    <small className="help-block form-text">Preço do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome-produto" id="nome-produto" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante-processador" className=" form-control-label">Fabricante</label>
                                    <input type="text" name="fabricante-processador" id="fabricante-processaor" placeholder="Fabricante" className="form-control" />
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>
                                <div className="col ">
                                    <label htmlFor="modelo-input" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo-input" id="modelo-processador" placeholder="Modelo" className="form-control" />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="selectSm" className=" form-control-label">Tipo</label>
                                    <select name="tipo-processador" id="tipo-processador" className="form-control-sm form-control">
                                        <option selected value="" disabled>Selecione</option>
                                        <option value="HDD-SATA">HDD SATA</option>
                                        <option value="SSD-SATA">SSD SATA</option>
                                        <option value="SSD-M.2">SSD M.2</option>
                                        <option value="USB">USB</option>
                                    </select>
                                    <small className="help-block form-text">Tipo de dispositivo e conexão</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="capacidade-processador" className=" form-control-label">Capacidade</label>
                                    <input type="text" name="email-input" id="capacidade-processador" placeholder="Capacidade" className="form-control" />
                                    <small className="help-block form-text">Capacidade de armazenamento</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Velocidade de Leitura</label>
                                    <input type="text" name="email-input" placeholder="Velocidade de Leitura" className="form-control" />
                                    <small className="help-block form-text">Velocidade de Leitura ou RPM</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Velocidade de Escrita</label>
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
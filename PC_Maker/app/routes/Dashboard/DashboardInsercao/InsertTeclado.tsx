import { useEffect } from "react";
import { changeSelectValue } from "../../../script/changeSelectValue";

function DashboardInsercaoTeclado() {
    useEffect(() => {
        changeSelectValue('teclado')
    });
    return (
        <div style={{ paddingTop: '7rem' }}>

            <div className="col-lg-6 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Teclados</strong>
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
                                    <label htmlFor="selectSm" className=" form-control-label">Tamanho</label>
                                    <select name="selectSm" id="Sele    ctLm" className="form-control-sm form-control" defaultValue={''}>
                                        <option value="" disabled>Selecione</option>
                                        <option value="battleship">Battle ship</option>
                                        <option value="fullsize">Full size</option>
                                        <option value="1800">1800</option>
                                        <option value="90">96% / 90%</option>
                                        <option value="80">Tenkeyless (TKL/80%)</option>
                                        <option value="75">75%</option>
                                        <option value="65">65%</option>
                                        <option value="60">60%</option>
                                        <option value="50">50%</option>
                                        <option value="40">40%</option>
                                    </select>
                                    <small className="help-block form-text">Tamanho e formato do teclado</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="selectSm" className=" form-control-label">Tipo</label>
                                    <select name="selectSm" id="Sele    ctLm" className="form-control-sm form-control" defaultValue={''}>
                                        <option value="" disabled className='text-secondary'>Selecione</option>
                                        <option value="membrana">Membrana</option>
                                        <option value="mecanico">Mecânico</option>
                                        <option value="hibrido">Híbrido</option>
                                    </select>
                                    <small className="help-block form-text">Tipo de mecanismo de ação</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col">
                                    <div className="form-check">
                                        <div className="checkbox">
                                            <label htmlFor="checkbox1" className="form-check-label ">
                                                <input type="checkbox" id="checkbox1" name="checkbox1" value="semfio" className="form-check-input check" />Sem fio
                                            </label>
                                        </div>
                                    </div>
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
export default DashboardInsercaoTeclado
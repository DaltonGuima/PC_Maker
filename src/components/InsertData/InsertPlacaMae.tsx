
import { useEffect } from "react";
import { changeSelectValue } from "../../script/changeSelectValue";

function DashboardInsercaoPlacaMae() {

    useEffect(() => {
        changeSelectValue('placa-mae')
    });

    return (
        <div style={{ paddingTop: '7rem' }}>

            <div className="col-lg-10 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Placa-mãe</strong>
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
                                    <label htmlFor="email-input" className=" form-control-label">Chipset</label>
                                    <input type="email" name="email-input" placeholder="Chipset" className="form-control" />
                                    <small className="help-block form-text">Chipset</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Soquete</label>
                                    <input type="email" name="email-input" placeholder="Soquete" className="form-control" />
                                    <small className="help-block form-text">Soquete</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="selectSm" className=" form-control-label">Fator de forma</label>
                                    <select name="selectSm" id="SelectLm" className="form-control-sm form-control" defaultValue={''}>
                                        <option value="" disabled className='text-secondary'>Selecione</option>
                                        <option value="mATX">mATX</option>
                                        <option value="ATX">ATX</option>
                                        <option value="EATX">EATX</option>
                                        <option value="Mini-ITX">Mini-ITX</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">TDP</label>
                                    <input type="email" name="email-input" placeholder="TDP" className="form-control" />
                                    <small className="help-block form-text">TDP do soquete</small>
                                </div>
                                <div className="col">
                                    <label className=" form-control-label">Tecnologia RAM</label>
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
                                                <input type="radio" id="radio3" name="radios" value="DDR5" className="form-check-input" />DDR5
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Slots RAM</label>
                                    <input type="email" name="email-input" placeholder="Slots RAM" className="form-control" />
                                    <small className="help-block form-text">Quantidadede Slots RAM</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Capacidade Máxima de RAM</label>
                                    <input type="email" name="email-input" placeholder="Capacidade Máxima de RAM" className="form-control" />
                                    <small className="help-block form-text">Capacidade Máxima de RAM</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Gráfico Integrado</label>
                                    <input type="email" name="email-input" placeholder="Gráfico Integrado" className="form-control" />
                                    <small className="help-block form-text">Modelo do gráfico integrado</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Slots M.2</label>
                                    <input type="email" name="email-input" placeholder="Quantidade de Slots M.2" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Slots M.2</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Slots PCI Express x16</label>
                                    <input type="email" name="email-input" placeholder="Quantidade de Slots PCI Express x16" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Slots PCI Express x16</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Slots PCI</label>
                                    <input type="email" name="email-input" placeholder="Quantidade de Slots PCI" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Slots PCI</small>
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
export default DashboardInsercaoPlacaMae;
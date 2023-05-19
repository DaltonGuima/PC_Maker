import { useEffect } from "react";
import { changeSelectValue } from "~/script/changeSelectValue";
import axios from "axios";
import type { FormEvent } from "react";

function DashboardInsercaoFonteDeAlimentacao() {
    useEffect(() => {
        changeSelectValue('FonteDeAlimentacao')
    });

    async function handleCreateProdutoFonteDeAlimentacao(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        try {
            await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
                nome: data.nome,
                fabricante: data.fabricante,
                modelo: data.modelo,
                preco: Number(data.preco),
                vendedor: data.vendedor,
                linkProduto: data.linkProduto,
                categoria: "FonteDeAlimentacao",
                especificacoes: { "tamanho": data.tamanho }
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ paddingTop: '7rem' }}>


            <div className="col-lg-10 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Fonte de Alimentação</strong>
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={handleCreateProdutoFonteDeAlimentacao} className="form-horizontal">
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
                                    <label htmlFor="preco-input" className=" form-control-label">Potência</label>
                                    <input type="text" name="preco-input" placeholder="Potência" className="form-control" />
                                    <small className="help-block form-text">Potência</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="selectSm" className=" form-control-label">Certificação</label>
                                    <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                                        <option value="0" disabled className='text-secondary'>Selecione</option>
                                        <option value="1">Nenhuma</option>
                                        <option value="2">80 Plus White</option>
                                        <option value="3">80 Plus Bronze</option>
                                        <option value="4">80 Plus Silver</option>
                                        <option value="5">80 Plus Gold</option>
                                        <option value="5">80 Plus Platinum</option>
                                        <option value="5">80 Plus Titanium</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="preco-input" className=" form-control-label">Conector Principal</label>
                                    <input type="text" name="preco-input" placeholder="Conector Principal" className="form-control" />
                                    <small className="help-block form-text">Conector Principal (20 + 4 Pin, etc) </small>
                                </div>
                                <div className="col">
                                    <label htmlFor="preco-input" className=" form-control-label">Conector da CPU</label>
                                    <input type="text" name="preco-input" placeholder="Conector da CPU" className="form-control" />
                                    <small className="help-block form-text">Conector da CPU (4 + 4 Pin, etc)</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="preco-input" className=" form-control-label">Conector PCIe</label>
                                    <input type="text" name="preco-input" placeholder="Conector PCIe" className="form-control" />
                                    <small className="help-block form-text">Quantidade e tipo do conector PCIe (6 + 2 Pin, etc)</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col col-md-9">
                                    <div className="form-check">
                                        <div className="checkbox">
                                            <label htmlFor="checkbox1" className="form-check-label ">
                                                <input type="checkbox" id="checkbox1" name="checkbox1" value="notebook" className="form-check-input check" />É para notebooks?
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
export default DashboardInsercaoFonteDeAlimentacao;
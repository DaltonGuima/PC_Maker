import { useEffect } from "react";
import { changeSelectValue } from "~/script/changeSelectValue";
import axios from "axios";
import type { FormEvent } from "react";

function DashboardInsercaoMemoriaRam() {

    useEffect(() => {
        changeSelectValue('MemoriaRam')
    });

    async function handleCreateProdutoMemoriaRam(event: FormEvent) {
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
                categoria: "MemoriaRam",
                especificacoes: {
                    "capacidade": data.capacidade, "velocidade": data.velocidade,
                    "tecnologia": data.tecnologia, "voltagem": data.voltagem,
                    "latencia": data.latencia, "notebook": data.notebook
                }
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
                        <strong>Memória RAM</strong>
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={handleCreateProdutoMemoriaRam} className="form-horizontal">
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
                                <div className="col ">
                                    <label htmlFor="email-input" className=" form-control-label">Capacidade</label>
                                    <input type="email" name="email-input" placeholder="Capacidade" className="form-control" />
                                    <small className="help-block form-text">Capacidade da memória</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Velocidade</label>
                                    <input type="email" name="email-input" placeholder="Velocidade" className="form-control" />
                                    <small className="help-block form-text">Frequência padrão em que opera</small>
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
                                                <input type="radio" id="radio2" name="radios" value="DDR5" className="form-check-input" />DDR5
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Voltagem</label>
                                    <input type="email" name="email-input" placeholder="Voltagem" className="form-control" />
                                    <small className="help-block form-text">Voltagem padrão em que opera</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Latência</label>
                                    <input type="email" name="email-input" placeholder="Latência" className="form-control" />
                                    <small className="help-block form-text">Latência padrão em que opera</small>
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
export default DashboardInsercaoMemoriaRam
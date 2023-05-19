import type { FormEvent } from "react";
import { useEffect } from "react";
import { changeSelectValue } from "~/script/changeSelectValue";
import axios from "axios";

function DashboardInsercaoGabinete() {
    useEffect(() => {
        changeSelectValue('Gabinete')
    });

    async function handleCreateProdutoGabinete(event: FormEvent) {
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
                categoria: "Gabinete",
                especificacoes: { "tipo": data.tipo }
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
                        <strong>Gabinete</strong>
                    </div>
                    <form onSubmit={handleCreateProdutoGabinete} className="form-horizontal">
                        <div className="card-body card-block">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome da empresa que vende o produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante" className=" form-control-label">Fabricante</label>
                                    <input type="text" name="fabricante" id="fabricante" placeholder="Fabricante" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome do fabricante</small>
                                </div>
                                <div className="col ">
                                    <label htmlFor="modelo" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo" id="modelo" placeholder="Modelo" className="form-control" />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="preco" className=" form-control-label">Preço</label>
                                    <input type="text" name="preco" id="preco" placeholder="Preço" className="form-control" />
                                    <small className="help-block form-text">Preço do produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="vendedor" className=" form-control-label">Vendedor</label>
                                    <input type="text" name="vendedor" id="vendedor" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="linkProduto" className=" form-control-label">Link Produto</label>
                                    <input type="text" name="linkProduto" id="linkProduto" placeholder="Fabricante" className="form-control" />
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="tipo" className=" form-control-label">Tipo</label>
                                    <select name="tipo" id="tipo" className="form-control-sm form-control" defaultValue={""}>
                                        <option selected value="" disabled className='text-secondary'>Selecione</option>
                                        <option value="fulltower">Full Tower</option>
                                        <option value="midtower">Mid Tower</option>
                                        <option value="minitower">Mini Tower</option>
                                        <option value="smallformfactor">Small Form Factor</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <button type="submit" className="au-btn au-btn-icon au-btn--purple au-btn--small">
                        <i className="zmdi zmdi-plus"></i>Adicionar</button>
                    <div className="rs-select2--dark rs-select2--sm rs-select2--dark2 ">
                    </div>
                </div>
            </div>
        </div>

    )
}
export default DashboardInsercaoGabinete
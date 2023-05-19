import { useHookstate } from "@hookstate/core";
import { useParams } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { TableRead } from "~/components/TableRead"
import type { LocaisVendasProps } from "~/components/TableRead/Datas/LocalVendas";
import { LocalVendas } from "~/components/TableRead/Datas/LocalVendas";
import { SearchTable } from "~/components/TableRead/TableElements";

export interface LocaisVendasTypes extends LocaisVendasProps {
    produto: {
        id: number,
        nome: string,
        fabricante: string
    }
}

export interface Produto {
    id: number,
    nome: string,
    categoria: string
}

function LocaisVendas() {
    const params = useParams();
    const SearchByNomeInput = useHookstate(SearchTable)
    const [locaisVendas, setLocaisVendas] = useState<LocaisVendasTypes[]>([])
    const [produto, setProduto] = useState<Produto>()

    // const [ventoinha, setVentoinha] = useState<VentoinhaProps[]>([]);
    // const SearchByNomeInput = useHookstate(SearchByNome)

    useEffect(() => {
        axios.get("http://127.0.0.1:8080/api/v1/localvendas")
            .catch(() => { return null })
            .then(response => {
                setLocaisVendas(response?.data)
            })

    }, [])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/v1/produtos/${params.produtoId}`)
            .catch(() => { return null })
            .then(response => setProduto(response?.data))

    }, [params.produtoId])



    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <h3 className="text-center text-light m-5 ">{produto?.categoria ? produto?.categoria : "Vazio"}: {produto?.nome}</h3>
                <div className="container-fluid">
                    <div className="row">
                        <TableRead
                            tipoPesquisa="Vendedor"
                            key={'LocalVenda'}
                            title={`Locais Vendas`}
                            id='LocalVenda'
                            tipoCRUD={'componentes'}
                            insereDados
                            produtoId={Number(params.produtoId)}
                            cols={['ID', 'Vendedor', 'Preço', 'Link Produto']}
                            body={locaisVendas
                                .filter(produtoId => produtoId.produto.id == Number(params.produtoId))
                                .filter(teste => teste.vendedor.includes(SearchByNomeInput.get()))
                                .map(localVenda => {
                                    return (
                                        <LocalVendas
                                            key={localVenda.id}
                                            id={localVenda.id}
                                            preco={localVenda.preco}
                                            vendedor={localVenda.vendedor}
                                            linkProduto={localVenda.linkProduto}
                                        />
                                    )
                                })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocaisVendas
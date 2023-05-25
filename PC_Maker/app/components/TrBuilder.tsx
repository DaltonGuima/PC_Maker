import { Link } from "@remix-run/react"
import axios from "axios"
import type { Dispatch } from "react";
import { useState, useEffect } from "react"
import { useHydrated } from "remix-utils"
import type { LocaisVendas } from "~/Interface/ComponenteInterface"

export interface ItemBuild {
    idLocalVenda: number
    qtdItem: number
    preco: number

}

// 
// const [teste, setTeste] = useState(0)

export default function TrBuilder(props: { categoryProduct: string, SetSubtotal: Dispatch<number>, SetqtdItem: Dispatch<number> }) {
    const [localVenda, setLocalVenda] = useState<LocaisVendas>()
    const [subTotal, setSubTotal] = useState(0)
    const [qtdItem, setQtdItem] = useState(1)
    const hydrated = useHydrated();


    useEffect(() => {

        if (localStorage.getItem(props.categoryProduct) != null) {
            axios.get(`http://127.0.0.1:8080/api/v1/localvendas/${localStorage.getItem(props.categoryProduct)}`)
                .catch(() => { return null })
                .then(response => {
                    setLocalVenda(response?.data)
                    setSubTotal(response?.data.preco)
                })
            /* pq o o bglh de item não funfava aa */
            props.SetSubtotal(subTotal)
            props.SetqtdItem(qtdItem)
        }

    }, [props, props.categoryProduct, qtdItem, subTotal])

    /* if (subTotal == 0)
        setSubTotal(localVenda?.preco as number) */
    /* function loadValue() {
        if (subTotal == 0) {
            setSubTotal(localVenda?.preco as number)
        }
        return subTotal
    } */



    if (hydrated && localStorage.getItem(props.categoryProduct)) {

        return (
            <tr className="mt-2">

                <td>
                    <div className="d-sm-inline-flex p-2">
                        <button data-bs-toggle="modal" data-bs-target="#ModalFoto" className="btnBuilderImg">
                            <p className="d-block d-md-none"><i className="fa fa-image cont"></i> Ver Imagem</p>
                            <img className="peca" src="https://via.placeholder.com/50x50/" alt="Foto componente" />
                        </button>
                    </div>
                    <div className="d-sm-inline-flex p-2 text-white">
                        <span className="DescricaoProduto p-2 cont">
                            <p>{localVenda?.produto.nome}</p>
                        </span>
                    </div>
                </td>
                {/* Vou ter que alterar aqui dp */}
                <td className="text-success p-sm-2 fw-bold" >R$ {subTotal}</td>
                <td>
                    <input type="number" name="qtdItem" id="qtdItem" className="inputQtdItem w-50" defaultValue={qtdItem} min={1}
                        onChange={event => {
                            setSubTotal(Number(event.target.value) * Number(localVenda?.preco))
                            setQtdItem(Number(event.target.value))
                        }
                        }
                    />
                </td>
                <td className="d-flex justify-content-center p-sm-2">
                    <p className="d-block cont">{localVenda?.vendedor}</p>
                </td>
                <td className="removeComponenteX align-items-end flex-column">
                    <i className="fa-solid fa-x"></i>
                </td>
            </tr>
        )
    }
    else
        return (
            <tr className="mt-1">
                <td>
                    <Link to={`/Search/CategoriaProduto/${props.categoryProduct}`}>
                        <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher {props.categoryProduct}</button>
                    </Link>
                </td>
            </tr>
        )
}
import { Link, useParams } from "@remix-run/react"
import axios from "axios"
import type { Dispatch } from "react";
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap";
import { useHydrated } from "remix-utils"
import type { LocaisVendas } from "~/Interface/ComponenteInterface"
import type { ItemBuildI } from "~/routes/Build/Builder.$typeRequest";

export interface ItemBuild {
    idLocalVenda: number
    qtdItem: number
    preco: number

}


export default function TrBuilder(props: {
    categoryProduct: string,
    SetSubtotal: Dispatch<number>,
    SetqtdItem: Dispatch<number>,
}) {
    const [localVenda, setLocalVenda] = useState<LocaisVendas>()
    const [subTotal, setSubTotal] = useState(0)
    const [qtdItem, setQtdItem] = useState(1)
    const hydrated = useHydrated();
    const params = useParams();

    useEffect(() => {

        if (
            localStorage.getItem(`edit${props.categoryProduct}`)
            && params.typeRequest != "new"
            && localStorage.getItem(`edit${props.categoryProduct}`) != "0"
        ) {
            handleAxios(Number(localStorage.getItem(`edit${props.categoryProduct}`)))
            handleAxiosBuild()
        }
        else if (localStorage.getItem(props.categoryProduct) && params.typeRequest == "new") {
            handleAxios(Number(localStorage.getItem(props.categoryProduct)))
        }

        async function handleAxiosBuild() {
            await axios(`http://127.0.0.1:8080/api/v1/builds/${params.typeRequest}`)
                .catch(() => { return null })
                .then(response => {
                    const subTotalEdit = response?.data.itens
                        .find((item: ItemBuildI) =>
                            item.localVenda.id == Number(localStorage.getItem(`edit${props.categoryProduct}`))
                        )?.subtotal
                    const qtdEdit = response?.data.itens
                        .find((item: ItemBuildI) =>
                            item.localVenda.id == Number(localStorage.getItem(`edit${props.categoryProduct}`))
                        )?.quantidade

                    if (subTotalEdit || qtdEdit) {
                        if (subTotal == 0)
                            setSubTotal(subTotalEdit)
                        if (qtdItem == 1)
                            setQtdItem(qtdEdit)
                    }
                })
        }

        async function handleAxios(id: number) {
            await axios.get(`http://127.0.0.1:8080/api/v1/localvendas/${id}`)
                .catch(() => { return null })
                .then(response => {
                    if (subTotal == 0) {
                        setSubTotal(response?.data.preco)
                    }
                    setLocalVenda(response?.data)
                    if (hydrated && params.typeRequest != "new" && !localStorage.getItem(`edit${props.categoryProduct}`)) {
                        localStorage.setItem(`edit${props.categoryProduct}`, response?.data.id.toString())
                    }

                })
        }

        props.SetSubtotal(subTotal)
        props.SetqtdItem(qtdItem)
    }, [props, props.categoryProduct, qtdItem, subTotal, params.typeRequest, hydrated])

    function destroyLocalStorage() {
        if (hydrated) {
            if (localStorage.getItem(props.categoryProduct) && params.typeRequest == "new")
                localStorage.removeItem(props.categoryProduct)
            if (localStorage.getItem(`edit${props.categoryProduct}`) && params.typeRequest != "new") {
                localStorage.setItem(`edit${props.categoryProduct}`, "0")
                setLocalVenda(undefined)
            }
            location.reload()
        }
    }

    if (hydrated && (localVenda)) {

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
                    <input type="number" name="qtdItem" id="qtdItem" className="inputQtdItem" value={qtdItem} min={1}
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

                <td>
                    <Button className="btn-modal-primary" onClick={destroyLocalStorage}>
                        <i className="fa-solid fa-x"></i>
                    </Button>
                </td>
            </tr>
        )
    }
    else
        return (
            <tr className="mt-1">
                <td>
                    <Link to={`/Search/CategoriaProduto/${props.categoryProduct}/${params.typeRequest != "new" ? params.typeRequest : "new"}`}>
                        <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher {props.categoryProduct}</button>
                    </Link>
                </td>
            </tr>
        )
}
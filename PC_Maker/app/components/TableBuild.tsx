import type { Dispatch } from "react";

export function handleModal(
    img: string,
    title: string,
    setImgBody: Dispatch<string>,
    setTitleModal: Dispatch<string>) {

    setTitleModal(title)
    setImgBody(img)
}

interface TableBuildProps {
    setImgBody: Dispatch<string>,
    setTitleModal: Dispatch<string>,
    img: string,
    nome: string,
    tipo: string,
    preco: string
}

export default function TableBuild(props: TableBuildProps) {

    return (
        <tr className="mt-2">
            <td>
                <div className="tipoComponente">
                    {props.tipo}
                </div>
            </td>
            <td>
                <div className="d-sm-inline-flex p-2">
                    <button data-bs-toggle="modal" data-bs-target="#ModalFoto"
                        onFocus={() => handleModal(props.img, props.nome, props.setImgBody, props.setTitleModal)}
                    >
                        <p className="d-block d-md-none"><i className="fa fa-image"></i> Ver Imagem</p>
                        <img className="peca" src={props.img} alt="Foto componente" />
                    </button>
                </div>
                <div className="d-sm-inline-flex p-2 text-white">
                    <span className="DescricaoProduto p-2">
                        <p>{props.nome}</p>
                        <a href="">
                            <p className="plow pt-3"><i className="fa fa-search-plus" aria-hidden="true"></i> Mostrar detalhes</p>
                        </a>
                    </span>
                </div>
            </td>
            <td className="text-success p-sm-2">{props.preco}</td>
            <td className="d-flex justify-content-center p-sm-2">
                <p className="d-block d-md-none">Kabum</p>
                <img className="Vendedor" src="https://via.placeholder.com/80x22/" alt="Foto do Vendedor" />
            </td>
        </tr>
    )
}
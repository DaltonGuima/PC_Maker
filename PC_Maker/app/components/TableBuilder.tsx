interface TableBuilderProps {
    img: string,
    nome: string,
    preco: string
}
export default function TableBuilder(props: TableBuilderProps) {
//Testes
    return (
        <tr className="mt-2">
            <td>
                <div className="d-sm-inline-flex p-2">
                    <button data-bs-toggle="modal" data-bs-target="#ModalFoto">
                        <p className="d-block d-md-none"><i className="fa fa-image"></i> Ver Imagem</p>
                        <img className="peca" src={props.img} alt="Foto componente" />
                    </button>
                </div>
                <div className="d-sm-inline-flex p-2 text-white">
                    <span className="DescricaoProduto p-2">
                        <p>{props.nome}</p>
                    </span>
                </div>
            </td>
            <td className="text-success p-sm-2" >{props.preco}</td>
            <td className="d-flex justify-content-center p-sm-2">
                <p className="d-block d-md-none">Kabum</p>
                <img className="Vendedor" src="https://via.placeholder.com/80x22/" alt="Foto do Vendedor" />
            </td>
        </tr>
    )
}
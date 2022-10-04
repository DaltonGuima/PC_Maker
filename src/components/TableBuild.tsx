export function handleModal(img: string, title: string) {

}

export default function TableBuild() {

    return (
        <tr className="mt-2">
            <td>
                <div className="tipoComponente">
                    MoB
                </div>
            </td>
            <td>
                <div className="d-sm-inline-flex p-2">
                    <button data-bs-toggle="modal" data-bs-target="#ModalFoto"
                        onFocus={() => handleModal('https://via.placeholder.com/300x300/', 'Placa Mãe Asus EX-B560M')}
                    >
                        <p className="d-block d-md-none"><i className="fa fa-image"></i> Ver Imagem</p>
                        <img className="peca" src="https://via.placeholder.com/300x300/" alt="Foto componente" />
                    </button>
                </div>
                <div className="d-sm-inline-flex p-2 text-white">
                    <span className="DescricaoProduto p-2">
                        <p>Placa Mãe Asus EX-B560M</p>
                        <a href="">
                            <p className="plow pt-3"><i className="fa fa-search-plus" aria-hidden="true"></i> Mostrar detalhes</p>
                        </a>
                    </span>
                </div>
            </td>
            <td className="text-success p-sm-2">R$ 742,99</td>
            <td className="d-flex justify-content-center p-sm-2">
                <p className="d-block d-md-none">Kabum</p>
                <img className="Vendedor" src="https://via.placeholder.com/80x22/" alt="Foto do Vendedor" />
            </td>
        </tr>
    )
}
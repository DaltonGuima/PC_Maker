
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../styles/build.css'
import '../styles/main.css'
import { carousel } from '../script/carousel'
import { useState } from 'react'
import TableBuild from '../components/TableBuild'
import useDocumentTitle from '../script/useDocumentTitle'
//import './App.css'

function Build() {

    useDocumentTitle('Build')

    const [imgBody, setImgBody] = useState<string>();
    const [titleModal, setTitleModal] = useState<string>();


    function Modaltext(img: string, title: string) {
        setImgBody(img);
        setTitleModal(title);
    }

    return (
        <div>
            <Header />
            <main id="conteudo">
                {/* <!-- #212425 --> */}
                <div className="headline">
                    <div className="tagsBuild">
                        <div className="tipoTela">
                            Build
                        </div>
                        <div className="dataCriacao">
                            SEX, 1 DE ABRIL, 2022
                        </div>
                    </div>
                    <div className="otherProfile">
                        <div className="row-fluid text-center p-2">
                            <div className="col col-lg-10 col-md-9 d-inline-flex">
                                <a className="nav-link dropleft text-decoration-none" href="#" role="button" data-bs-toggle="dropdown">
                                    <img src="/among_us2.png" alt="Foto de Perfil" />Computador NukaCola - xxx_EnzoG4mer_xxx
                                </a>
                            </div>
                            <div className="d-inline-flex RattingIcons">
                                <form action="">
                                    <label className="RattingVote mx-4" title="Favoritar">
                                        <input type="checkbox" id="fav" />
                                        <span className="Rate"><i className="fa fa-star" aria-hidden="true"></i></span>
                                    </label>
                                    <label className="RattingVote mx-2" title="Gostei">
                                        <input type="radio" name="Ratting" id="upvote" />
                                        <span className="Rate"><i className="fa fa-arrow-up" aria-hidden="true"></i></span>
                                    </label>
                                    <label className="RattingVote mx-2" title="Não gostei">
                                        <input type="radio" name="Ratting" id="downvote" />
                                        <span className="Rate"><i className="fa fa-arrow-down" aria-hidden="true"></i></span>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapperCarousel">
                    <div id="carousel">
                        <div id="content">
                            <div className="slide">
                                <button data-bs-toggle="modal" data-bs-target="#ModalFoto"
                                    onFocus={() => Modaltext('https://via.placeholder.com/300x150/?text=Foto de build', 'Foto da build')}
                                >
                                    <img src="https://via.placeholder.com/300x150/?text=Foto de build" height="300px" width="150px" alt="Foto da build" />
                                </button>
                            </div>
                            <div className="slide">
                                <button data-bs-toggle="modal" data-bs-target="#ModalFoto"
                                    onFocus={() => Modaltext('https://via.placeholder.com/300x150/?text=Foto de build', 'Foto da build')}
                                >
                                    <img src="https://via.placeholder.com/300x150/?text=Foto de build" height="300px" width="150px" alt="Foto da build" />
                                </button>
                            </div>
                            <div className="slide">
                                <button data-bs-toggle="modal" data-bs-target="#ModalFoto"
                                    onFocus={() => Modaltext('https://via.placeholder.com/300x150/?text=Foto de build', 'Foto da build')}
                                >
                                    <img src="https://via.placeholder.com/300x150/?text=Foto de build" height="300px" width="150px" alt="Foto da build" />
                                </button>
                            </div>
                            <div className="slide">
                                <button data-bs-toggle="modal" data-bs-target="#ModalFoto"
                                    onFocus={() => Modaltext('https://via.placeholder.com/300x150/?text=Foto de build', 'Foto da build')}
                                >
                                    <img src="https://via.placeholder.com/300x150/?text=Foto de build" height="300px" width="150px" alt="Foto da build" />
                                </button>
                            </div>
                            <div className="slide">
                                <button data-bs-toggle="modal" data-bs-target="#ModalFoto"
                                    onFocus={() => Modaltext('https://via.placeholder.com/300x150/?text=Foto de build', 'Foto da build')}
                                >
                                    <img src="https://via.placeholder.com/300x150/?text=Foto de build" height="300px" width="150px" alt="Foto da build" />
                                </button>
                            </div>
                            <div className="slide">
                                <button data-bs-toggle="modal" data-bs-target="#ModalFoto"
                                    onFocus={() => Modaltext('https://via.placeholder.com/300x150/?text=Foto de build', 'Foto da build')}
                                >
                                    <img src="https://via.placeholder.com/300x150/?text=Foto de build" height="300px" width="150px" alt="Foto da build" />
                                </button>
                            </div>

                        </div>
                    </div>
                    <button id="prev" onClick={carousel}><i className="arrow"></i></button>
                    <button id="next" onClick={carousel}><i className="arrow"></i></button>
                </div>
                <div id="descricaoSection">
                    <div id="descricaoTitle">
                        <b>Descrição</b>
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" id="boxDescricao" rows={4} disabled>Máquina de venda automática NukaCola personalizada com garrafas Quantum (Glass Coke a Cola).

                            Eu queria construir este PC usando o gabinete NZXT Nuka Cola... Fractal Define R6 USB-C com vidro temperado como chassi, e com vinil personalizado mas não foi possível.
                            Tem vários módulos RGB e ótima circulação de ar + sistema de liquid cooling.</textarea>
                    </div>
                </div>

                <div className="container col-md-10 mt-2 col">
                    <table className="table table-borderless text-light ">
                        <thead>
                            <tr className="mt-2">

                                <th className="col-md-1 col-1">Tipo</th>
                                <th className="col-md-9 col">Produto</th>
                                <th className="col-md-2 col">Preço</th>
                                <th className="col-md col">Vendedor</th>

                            </tr>

                        </thead>
                        <tbody>
                            <TableBuild
                                setTitleModal={setTitleModal}
                                setImgBody={setImgBody}
                                img='https://via.placeholder.com/300x300/'
                                nome='Placa Mãe Asus EX-B560M'
                                tipo='MoB'
                                preco='R$ 742,99'
                            />
                            <TableBuild
                                setTitleModal={setTitleModal}
                                setImgBody={setImgBody}
                                img='https://via.placeholder.com/300x300/'
                                nome='Intel I5 10400F LGA1200'
                                tipo='CPU'
                                preco='R$ 989,99'
                            />
                            <TableBuild
                                setTitleModal={setTitleModal}
                                setImgBody={setImgBody}
                                img='https://via.placeholder.com/300x300/'
                                nome='Memória Corsair Vengeance LPX 8GB, DDR4, 2400MHz, CL16'
                                tipo='RAM'
                                preco='R$ 214,90'
                            />
                            <TableBuild
                                setTitleModal={setTitleModal}
                                setImgBody={setImgBody}
                                img='https://via.placeholder.com/300x300/'
                                nome='GABINETE CORSAIR MID TOWER VIDRO TEMP, CC-9011166-WW'
                                tipo='Case'
                                preco='R$ 345,00'
                            />

                        </tbody>

                        <div className="modal fade" id="ModalFoto" aria-labelledby="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content bg-dark text-light">

                                    <div className="modal-header">
                                        <h6 className="modal-title ">{titleModal}</h6>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                    <div className="modal-body d-flex justify-content-center">
                                        <img src={imgBody} className="img-fluid" alt="Foto componente" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </table>
                </div>

                <br />
                <div className="container-fluid text-light text-right TextAfterTable" >
                    <div className="row">
                        <div className="col">
                            <h3>Voltagem Estimada: <small className="text-secondary">315W</small></h3>
                            <h3>Total: <small className="text-secondary">R$ 4137,21</small></h3>
                        </div>
                    </div>
                </div>
                <br />
            </main>
            <Footer />
        </div>
    )
}

export default Build

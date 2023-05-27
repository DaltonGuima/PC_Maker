import { useHookstate } from '@hookstate/core';
import { themePage } from '../script/changeTheme';



export function Footer() {

    const changeTheme = useHookstate(themePage)

    return (
        <footer className="site-footer" id="rodape">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <img src={`/${changeTheme.get() == "dark" ? "logoJuntaPecaRosaV1" : "logoJuntaPecaRosaV4"}.png`} className="col-sm-12 logoFooter" id="low-logo" alt="Logo da empresa" style={{ width: '15rem', height: '5rem' }} />
                    </div>
                    <div className="col-xs-6 col-md">
                        <h6>Categorias</h6>
                        <ul className="footer-links">
                            <li><a href="#">Monte Seu computador</a></li>
                            <li><a href="#">Builds</a></li>
                            <li><a href="#">Guias</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-md">
                        <h6>Informações</h6>
                        <ul className="footer-links">
                            <li><a href="#">Fóruns</a></li>
                            <li><a href="#">Variações de Preços</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-md">
                        <ul className="footer-links">
                            <h6>Sobre nós</h6>
                            <li><a href="../QuemSomos">Equipe</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Políticas de Privacidade</a></li>
                            <li><a href="#">Código de Defesa do Consumidor</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-md">
                        <h6>FAQ</h6>
                        <ul className="footer-links">
                            <li><a href="#">FAQ e Orientações</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr />
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Copyright &copy; 2022 All Rights Reserved by <a href="#">PC Maker</a>.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fa fa-facebook "></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
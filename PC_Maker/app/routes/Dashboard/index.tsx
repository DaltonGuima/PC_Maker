import { ChartDashboard } from "../../components/ChartDashboard";

function MainDashboard() {
    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row m-t-25">
                        <div className="col-sm-6 col-lg-3">
                            <div className="overview-item overview-item--c1">
                                <div className="overview__inner">
                                    <div className="overview-box clearfix">
                                        <div className="icon">
                                            <i className="zmdi zmdi-account-o"></i>
                                        </div>
                                        <div className="text">
                                            <h2>10368</h2>
                                            <span>membros online</span>
                                        </div>
                                    </div>
                                    <div className="overview-chart">
                                        <canvas id="widgetChart1"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="overview-item overview-item--c2">
                                <div className="overview__inner">
                                    <div className="overview-box clearfix">
                                        <div className="icon">
                                            <i className="fa-solid fa-computer"></i>
                                        </div>
                                        <div className="text">
                                            <h2>388,688</h2>
                                            <span>Builds Montadas</span>
                                        </div>
                                    </div>
                                    <div className="overview-chart">
                                        <canvas id="widgetChart2"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="overview-item overview-item--c3">
                                <div className="overview__inner">
                                    <div className="overview-box clearfix">
                                        <div className="icon">
                                            <i className="fa-solid fa-display"></i>
                                        </div>
                                        <div className="text">
                                            <h2>50,086</h2>
                                            <span>Peças Cadastradas</span>
                                        </div>
                                    </div>
                                    <div className="overview-chart">
                                        <canvas id="widgetChart3"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="overview-item overview-item--c4">
                                <div className="overview__inner">
                                    <div className="overview-box clearfix">
                                        <div className="icon">
                                            <i className="zmdi zmdi-money"></i>
                                        </div>
                                        <div className="text">
                                            <h2>$1,060,386</h2>
                                            <span>ganhos totais</span>
                                        </div>
                                    </div>
                                    <div className="overview-chart">
                                        <canvas id="widgetChart4"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-9 ">
                            <h2 className="title-1 m-b-25">Componentes mais presentes</h2>
                            <div className="table-responsive table--no-card m-b-40">
                                <table className="table table-borderless table-earning">
                                    <thead>
                                        <tr>
                                            <th>Vendedor</th>
                                            <th>Ordem ID</th>
                                            <th>Nome</th>
                                            <th className="text-right">Preço</th>
                                            <th className="text-right">Quantidade</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr>
                                            <td>Kabum</td>
                                            <td>100398</td>
                                            <td>iPhone X 64Gb Cinza</td>
                                            <td className="text-right">R$7999.00</td>
                                            <td className="text-right">1</td>

                                        </tr>
                                        <tr>
                                            <td>Kabum</td>
                                            <td>100397</td>
                                            <td>Samsung S8 Black</td>
                                            <td className="text-right">$756.00</td>
                                            <td className="text-right">1</td>

                                        </tr>
                                        <tr>
                                            <td>Kabum</td>
                                            <td>100396</td>
                                            <td>Game Console Controller</td>
                                            <td className="text-right">$22.00</td>
                                            <td className="text-right">2</td>

                                        </tr>
                                        <tr>
                                            <td>Kabum</td>
                                            <td>100395</td>
                                            <td>iPhone X 256Gb Black</td>
                                            <td className="text-right">R$7199.00</td>
                                            <td className="text-right">1</td>

                                        </tr>
                                        <tr>
                                            <td>Kabum</td>
                                            <td>100393</td>
                                            <td>USB 3.0 Cable</td>
                                            <td className="text-right">$10.00</td>
                                            <td className="text-right">3</td>

                                        </tr>
                                        <tr>
                                            <td>Kabum</td>
                                            <td>100392</td>
                                            <td>Smartwatch 4.0 LTE Wifi</td>
                                            <td className="text-right">$199.00</td>
                                            <td className="text-right">6</td>

                                        </tr>
                                        <tr>
                                            <td>Kabum</td>
                                            <td>100391</td>
                                            <td>Camera C430W 4k</td>
                                            <td className="text-right">$699.00</td>
                                            <td className="text-right">1</td>

                                        </tr>
                                        <tr>
                                            <td>Kabum</td>
                                            <td>100393</td>
                                            <td>USB 3.0 Cable</td>
                                            <td className="text-right">R$15.00</td>
                                            <td className="text-right">3</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h2 className="title-1 m-b-25">Builds com Mais votos</h2>
                            <div className="au-card au-card--bg-blue au-card-top-countries m-b-40">
                                <div className="au-card-inner">
                                    <div className="table-responsive">
                                        <table className="table table-top-countries">
                                            <tbody>
                                                <tr>
                                                    <td>Build Xablau voados</td>
                                                    <td className="text-right">50000</td>
                                                </tr>
                                                <tr>
                                                    <td>Build Mortal de costas</td>
                                                    <td className="text-right">20000</td>
                                                </tr>
                                                <tr>
                                                    <td>Build Preguica.nome</td>
                                                    <td className="text-right">10000</td>
                                                </tr>
                                                <tr>
                                                    <td>Build Comunista</td>
                                                    <td className="text-right">℃</td>
                                                </tr>
                                                <tr>
                                                    <td>Build Xablau voados</td>
                                                    <td className="text-right">50000</td>
                                                </tr>
                                                <tr>
                                                    <td>Build Xablau voados</td>
                                                    <td className="text-right">50000</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                                <div className="au-card-title" >
                                    <div className="bg-overlay bg-overlay--blue"></div>
                                    <h3>
                                        <i className="fa-solid fa-reply"></i>Feedback do PC Maker
                                    </h3>
                                </div>
                                <div className="au-task js-list-load">
                                    <div className="au-task__title">
                                        <p>Novos feedbacks</p>
                                    </div>
                                    <div className="au-task-list js-scrollbar3 panels-dashboard">
                                        <div className="au-task__item au-task__item--danger">
                                            <div className="au-task__item-inner">
                                                <h5 className="task">
                                                    <a href="#">Reunião sobre as vendas do primeiro trimestre de 2022</a>
                                                </h5>
                                                <span className="text-secondary small">05/10/22 15:30</span>
                                            </div>
                                        </div>
                                        <div className="au-task__item au-task__item--warning">
                                            <div className="au-task__item-inner">
                                                <h5 className="task">
                                                    <a href="#">Criação de um plano de negócio</a>
                                                </h5>
                                                <span className="text-secondary small">05/10/22 15:30</span>
                                            </div>
                                        </div>
                                        <div className="au-task__item au-task__item--primary">
                                            <div className="au-task__item-inner">
                                                <h5 className="task">
                                                    <a href="#">Reunião com o Lucas sobre Design do projeto</a>
                                                </h5>
                                                <span className="text-secondary small">05/10/22 15:30</span>
                                            </div>
                                        </div>
                                        <div className="au-task__item au-task__item--success">
                                            <div className="au-task__item-inner">
                                                <h5 className="task">
                                                    <a href="#">Criação de um Template do Dashboard</a>
                                                </h5>
                                                <span className="text-secondary small">05/10/22 15:30</span>
                                            </div>
                                        </div>
                                        <div className="au-task__item au-task__item--danger js-load-item">
                                            <div className="au-task__item-inner">
                                                <h5 className="task">
                                                    <a href="#">Meeting about plan for Admin Template 2018</a>
                                                </h5>
                                                <span className="text-secondary small">05/10/22 15:30</span>
                                            </div>
                                        </div>
                                        <div className="au-task__item au-task__item--warning js-load-item">
                                            <div className="au-task__item-inner">
                                                <h5 className="task">
                                                    <a href="#">Create new task for Dashboard</a>
                                                </h5>
                                                <span className="text-secondary small">05/10/22 15:30</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="au-task__footer">
                                        <button className="au-btn au-btn-load js-load-btn">Ver Mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 panels-dashboard">
                            <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                                <div className="au-card-title">
                                    <div className="bg-overlay bg-overlay--blue"></div>
                                    <h3>
                                        <i className="fa-solid fa-comments"></i>Central de perguntas</h3>
                                    <button className="au-btn-plus">
                                        <i className="zmdi zmdi-plus"></i>
                                    </button>
                                </div>
                                <div className="au-inbox-wrap js-inbox-wrap">
                                    <div className="au-message js-list-load">
                                        <div className="au-message__noti">
                                            <p>Você tem <span>2</span> novas mensagens</p>
                                        </div>
                                        <div className="au-message-list panels-dashboard">
                                            <div className="au-message__item unread">
                                                <div className="au-message__item-inner">
                                                    <div className="au-message__item-text">
                                                        <div className="avatar-wrap">
                                                            <div className="avatar">
                                                                <img src="/icon/avatar-02.jpg" alt="John Smith" />
                                                            </div>
                                                        </div>
                                                        <div className="text">
                                                            <h5 className="name">Giovana</h5>
                                                            <p>Preciso marcar uma reunião com a equipe?</p>
                                                        </div>
                                                    </div>
                                                    <div className="au-message__item-time">
                                                        <span>12 Min atrás</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="au-message__item unread">
                                                <div className="au-message__item-inner">
                                                    <div className="au-message__item-text">
                                                        <div className="avatar-wrap online">
                                                            <div className="avatar">
                                                                <img src="/icon/avatar-03.jpg" alt="Nicholas Martinez" />
                                                            </div>
                                                        </div>
                                                        <div className="text">
                                                            <h5 className="name">Lucas Albuquerque</h5>
                                                            <p>Qual o tema da reunião que vou ter com o Matheus?</p>
                                                        </div>
                                                    </div>
                                                    <div className="au-message__item-time">
                                                        <span>11:00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="au-message__item">
                                                <div className="au-message__item-inner">
                                                    <div className="au-message__item-text">
                                                        <div className="avatar-wrap online">
                                                            <div className="avatar">
                                                                <img src="/icon/avatar-04.jpg" alt="Michelle Sims" />
                                                            </div>
                                                        </div>
                                                        <div className="text">
                                                            <h5 className="name">Dalton Guimarães</h5>
                                                            <p>O que falta fazer do projeto?</p>
                                                        </div>
                                                    </div>
                                                    <div className="au-message__item-time">
                                                        <span>Ontem</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="au-message__item">
                                                <div className="au-message__item-inner">
                                                    <div className="au-message__item-text">
                                                        <div className="avatar-wrap">
                                                            <div className="avatar">
                                                                <img src="/icon/avatar-05.jpg" alt="Michelle Sims" />
                                                            </div>
                                                        </div>
                                                        <div className="text">
                                                            <h5 className="name">Gabriel Nunes</h5>
                                                            <p>Amanhã terá reunião?</p>
                                                        </div>
                                                    </div>
                                                    <div className="au-message__item-time">
                                                        <span>Domingo</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="au-message__item js-load-item">
                                                <div className="au-message__item-inner">
                                                    <div className="au-message__item-text">
                                                        <div className="avatar-wrap online">
                                                            <div className="avatar">
                                                                <img src="/icon/avatar-04.jpg" alt="Michelle Sims" />
                                                            </div>
                                                        </div>
                                                        <div className="text">
                                                            <h5 className="name">Rodrigo Silva</h5>
                                                            <p>As peças já chegaram?</p>
                                                        </div>
                                                    </div>
                                                    <div className="au-message__item-time">
                                                        <span>Yesterday</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="au-message__item js-load-item">
                                                <div className="au-message__item-inner">
                                                    <div className="au-message__item-text">
                                                        <div className="avatar-wrap">
                                                            <div className="avatar">
                                                                <img src="/icon/avatar-05.jpg" alt="Michelle Sims" />
                                                            </div>
                                                        </div>
                                                        <div className="text">
                                                            <h5 className="name">Michelle Sims</h5>
                                                            <p>Os novos SSDs já foram cadastrados?</p>
                                                        </div>
                                                    </div>
                                                    <div className="au-message__item-time">
                                                        <span>Sunday</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="au-message__footer">
                                            <button className="au-btn au-btn-load js-load-btn">Ver Mais</button>
                                        </div>
                                    </div>
                                    <div className="au-chat">
                                        <div className="au-chat__title">
                                            <div className="au-chat-info">
                                                <div className="avatar-wrap online">
                                                    <div className="avatar avatar--small">
                                                        <img src="/icon/avatar-02.jpg" alt="John Smith" />
                                                    </div>
                                                </div>
                                                <span className="nick">
                                                    <a href="#">John Smith</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="au-chat__content">
                                            <div className="recei-mess-wrap">
                                                <span className="mess-time">12 Min ago</span>
                                                <div className="recei-mess__inner">
                                                    <div className="avatar avatar--tiny">
                                                        <img src="/icon/avatar-02.jpg" alt="John Smith" />
                                                    </div>
                                                    <div className="recei-mess-list">
                                                        <div className="recei-mess">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>
                                                        <div className="recei-mess">Donec tempor, sapien ac viverra</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="send-mess-wrap">
                                                <span className="mess-time">30 Sec ago</span>
                                                <div className="send-mess__inner">
                                                    <div className="send-mess-list">
                                                        <div className="send-mess">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="au-chat-textfield">
                                            <form className="au-form-icon">
                                                <input className="au-input au-input--full au-input--h65" type="text" placeholder="Type a message" />
                                                <button className="au-input-icon">
                                                    <i className="zmdi zmdi-camera"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="row  text-center justify-content-center">
                            <div className="col-lg-12">
                                <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                                    {/* dw3d */}
                                    <ChartDashboard />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainDashboard    
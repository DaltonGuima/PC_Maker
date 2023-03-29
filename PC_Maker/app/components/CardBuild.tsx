import { Link } from "react-router-dom";

interface CardBuildProps {
    title: string,
    Itens: string[],
    buildImg: string,
    perfilImg: string,
    criador: string
}

export function CardBuild(props: CardBuildProps) {
    return (
        <div className="col-md-6 col-lg-4 pb-3">
            <Link to='/build/' className="card card-custom bg-dark text-light rounded" style={{ textDecoration: 'none' }} title='Ir para a build  '>
                <div className="card-custom-img" style={{ backgroundImage: `url(${props.buildImg})` }}></div>
                <div className="card-custom-avatar">
                    <img className="img-fluid bg-light p-1 border border-secondary" src={props.perfilImg} alt="Avatar do Usuário" />
                </div>
                <div className="card-body" style={{ overflowY: 'auto' }}>

                    <h4 className="card-title">{props.title}</h4>
                    <ul className="card-text pt-3">
                        {props.Itens.map(itens => <li key="a">{itens}</li>)}
                    </ul>
                    <h6 className="text-secondary">Feito por {props.criador}</h6>
                </div>
            </Link>
        </div>
    )
}
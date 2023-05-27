import { Link } from "react-router-dom";

interface CardBuildProps {
    title: string,
    Itens: string[],
    buildImg: string,
    id: number
}

export function MyCardBuild(props: CardBuildProps) {
    return (
        <div className="col-md-6 col-lg-4 pb-3">
            <Link to={`/Build/Builder/${props.id}`} className="card card-custom bg-dark text-light rounded" style={{ textDecoration: 'none' }} title='Ir para a build  '>
                <div className="card-custom-img" style={{ backgroundImage: `url(${props.buildImg})` }}></div>
                <div className="card-body" style={{ overflowY: 'auto' }}>

                    <h4 className="card-title cardBold">{props.title}</h4>
                    <ul className="card-text pt-3">
                        {props.Itens.map(itens => <li key="a">{itens}</li>)}
                    </ul>
                </div>
            </Link>
        </div>
    )
}

interface CardBuildProps{
    title: string,
    Itens: string[],
    buildImg: string,
    perfilImg: string
    criador: string
}

export function CardBuild(props:CardBuildProps){
    return(
        <div className="col-md-6 col-lg-4 pb-3">
                <div className="card card-custom bg-dark text-light">
                    <div className="card-custom-img" style={{backgroundImage: `url(${props.buildImg})`}}></div>
                        <div className="card-custom-avatar">
                            <img className="img-fluid bg-light p-1 border border-secondary" src={props.perfilImg} alt="Avatar do Usuário"  />
                        </div>
                    <div className="card-body" style={{overflowY: 'auto'}}>
                    <a href="" style={{textDecoration: 'none'}} title='Ir para a build'>
                        <h4 className="card-title">{props.title}</h4>
                    </a>
                        <ul className="card-text pt-3">
                            <li>{props.Itens[0]}</li>
                            <li>{props.Itens[1]}</li>
                            <li>{props.Itens[2]}</li>
                        </ul>
                        <h6 className="text-secondary">Feito por {props.criador}</h6>    
                    </div>
                </div>
        </div>
    )
}
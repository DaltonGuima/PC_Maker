import { TableRead } from "../../components/TableRead"
import { Feedback } from "../../components/TableRead/Datas/Feedback"


function DashboardFeedback() {
    const tipoCRUD = 'feedbacks';
    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <TableRead
                            tipoCRUD={tipoCRUD}
                            key={'Feedbacks'}
                            cols={['ID Usuario', 'ID Build', 'Build nome', 'Nome Usuario', 'Comentário', 'Up votes', 'Down votes']}
                            id='Feedbacks'
                            title="Feedbacks"
                            insereDados={false}
                            body={[
                                <Feedback
                                    key={'1'}
                                    idUsuario={'1'}
                                    idBuild={'1'}
                                    nomeBuild='Build Pc Rapidao'
                                    usuario='Astolfo'
                                    comentario="Queria voar"
                                    upvotes={5040}
                                    downvotes={4}
                                />,
                                <Feedback
                                    key={'2'}
                                    idUsuario={'1'}
                                    idBuild={'1'}
                                    nomeBuild='Build Pc Rapidao'
                                    usuario='Reginaldo'
                                    comentario="Qual é velocidade do computador?"
                                    upvotes={4823}
                                    downvotes={4}
                                />
                            ]}
                        />


                    </div>
                </div>

            </div>
        </div>

    )
}

export default DashboardFeedback

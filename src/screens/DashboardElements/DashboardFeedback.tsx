import { TableRead } from "../../components/TableRead"
import { Feedback } from "../../components/TableRead/Datas/Feedback"


function DashboardFeedback() {
    const tipoCRUD = 'feedback';
    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <TableRead
                            tipoCRUD={tipoCRUD}
                            key={'Feedbacks'}
                            cols={['ID Usuario', 'Nome Usuario', 'Comentário', 'Up votes', 'Down votes', 'status']}
                            id='Feedbacks'
                            body={[
                                <Feedback
                                    key={'1'}
                                    idUsuario={'1'}
                                    usuario='Astolfo'
                                    comentario="Queria voar"
                                    upvotes={5040}
                                    downvotes={4}
                                />,
                                <Feedback
                                    key={'2'}
                                    idUsuario={'2'}
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

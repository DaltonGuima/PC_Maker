import { TableRead } from "../../components/TableRead"


function DashboardVendedor(){
    return(
        <div className="main-content">
        <div className="section__content section__content--p30">
            <div className="container-fluid">
                <div className="row">
                    <TableRead
                        key={'Feedbacks'}
                        cols={['ID Usuario','Nome Usuario','Comentário','Up votes','Down votes','status']}
                        titulo='Feedbacks'
                        body={[
                                                                                                                                                                                                                                                   
                        ]}
                    />
                

                </div>
            </div>
            
        </div>
    </div>

    )
}

export default DashboardVendedor

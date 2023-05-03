import { Usuario } from "~/components/TableRead/Datas/Usuario";
import { TableRead } from "../../components/TableRead"


function DashboardUsuario() {
    const tipoCRUD = 'usuario';
    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <TableRead
                            tipoCRUD={tipoCRUD}
                            key={'Usuario'}
                            cols={['ID', 'Nome', 'Data de Nascimento', 'Email', 'Senha']}
                            id='Usuario'
                            insereDados={false}
                            body={[
                                <Usuario
                                    key={'1'}
                                    id={'1'}
                                    nome={'Vladimir'}
                                    dataNascimento='20/03/2001'
                                    email='Astolfo.dograu@gmail.com'
                                    senha="Queriavoar2.0"
                                />,
                                <Usuario
                                    key={'2'}
                                    id={'2'}
                                    nome={'Nome'}
                                    dataNascimento='11/09/2001'
                                    email='Astolfo.joao@gmail.com'
                                    senha="Queriavoar"
                                />,
                            ]}
                        />


                    </div>
                </div>

            </div>
        </div>

    )
}

export default DashboardUsuario

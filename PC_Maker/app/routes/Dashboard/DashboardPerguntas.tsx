import { TableRead } from "~/components/TableRead";
import { Perguntas } from "~/components/TableRead/Datas/Perguntas";




function DashboardPerguntas() {
    const tipoCRUD = 'Perguntas';
    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <TableRead
                            tipoCRUD={tipoCRUD}
                            key={'Perguntas'}
                            cols={['ID', 'Pergunta', 'Somente uma resposta?', 'Alternativas']}
                            id='Perguntas'
                            insereDados
                            body={[<Perguntas
                                key={1}
                                id={'32424'}
                                pergunta='Joga por onde?'
                                tipoRes
                                alternativas={['nootbook', 'Desktop', 'Console']}
                            />
                            ]}
                        />


                    </div>
                </div>

            </div>
        </div>

    )
}

export default DashboardPerguntas

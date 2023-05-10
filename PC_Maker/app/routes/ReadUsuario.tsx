import { useEffect, useState } from "react";
import { TableRead } from "~/components/TableRead";
import type { UsuarioProps } from "~/components/TableRead/Datas/Usuario";
import { Usuario } from "~/components/TableRead/Datas/Usuario";
import { changeSelectValue } from "~/script/changeSelectValue";
import { useHookstate } from "@hookstate/core";
import { SearchByNome } from "~/components/TableRead/TableElements";
import { getUsuario } from "~/script/getUsuario";


function ReadUsuario() {
    const [usuario, setUsuario] = useState<UsuarioProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchByNome)

    async function handleAxios() {
        setUsuario(await getUsuario("Nome"));
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Usuario')
    }, [])

    return (

        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <TableRead
                            key={'Usuario'}
                            id='Usuario'
                            tipoCRUD={'usuario'}
                            insereDados
                            cols={['ID', 'Nome', 'Data de Nacimento', 'Email', 'Senha']}
                            body={
                                usuario.map(usuario => {
                                    return (
                                        <Usuario
                                            key={usuario.id}
                                            id={usuario.id}
                                            nome={usuario.nome}
                                            dataNascimento={usuario.dataNascimento}
                                            email={usuario.email}
                                            senha={usuario.senha}
                                        />
                                    )
                                })}
                        />


                    </div>
                </div>

            </div>
        </div>
    )
}






export default ReadUsuario

import { useEffect, useState } from "react";
import { TableRead } from "~/components/TableRead";
import type { UsuarioProps } from "~/components/TableRead/Datas/Usuario";
import { Usuario } from "~/components/TableRead/Datas/Usuario";
import { changeSelectValue } from "~/script/changeSelectValue";


function ReadUsuario() {
    const [usuario, setUsuario] = useState<UsuarioProps[]>([]);

    /*  async function handleAxios() {
         setUsuario(await getUsuario("Usuario"))
     } */

    useEffect(() => {
        changeSelectValue('Usuario')
    }, [])

    return (
        <TableRead
            key={'Usuario'}
            id='Usuario'
            tipoCRUD={'usuario'}
            insereDados
            cols={['ID', 'Nome', 'Data de Nacimento', 'Email', 'Senha']}
            body={usuario.map(usuario => {
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
    )
}

export default ReadUsuario
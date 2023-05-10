import { useEffect, useState } from "react";
import { TableRead } from "~/components/TableRead";
import type { UsuarioProps } from "~/components/TableRead/Datas/Usuario";
import { Usuario } from "~/components/TableRead/Datas/Usuario";
import { changeSelectValue } from "~/script/changeSelectValue";
import { useHookstate } from "@hookstate/core";
import { SearchByNome } from "~/components/TableRead/TableElements";
import { getUsuario } from "~/script/getUsuario";
import axios from "axios";



function ReadUsuario() {
    const [usuario, setUsuario] = useState<UsuarioProps[]>([]);
    
    useEffect(() => {
        axios(`http://127.0.0.1:8080/api/v1/usuarios`).then(response => {
           setUsuario(response.data);
        })
    })
    
    console.log(usuario)
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

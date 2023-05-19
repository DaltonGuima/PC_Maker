import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { TecladoProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Teclado } from "~/components/TableRead/Datas/componentes/Teclado"
import { SearchTable } from "~/components/TableRead/TableElements";

import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadTeclado() {
    const [teclado, setTeclado] = useState<TecladoProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setTeclado(await getComponents("Teclado"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Teclado')
    }, [])

    console.log(teclado)

    return (
        <TableRead
            key={'Teclado'}
            id='Teclado'
            title="Teclado"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Tamanho', 'Tipo', 'Locais Vendas']}
            body={teclado.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Teclado
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{ tamanho: `${componente.especificacoes.tamanho}`, tipo: `${componente.especificacoes.tipo}` }}
                        />
                    )
                })}
        />
    )
}

export default ReadTeclado 
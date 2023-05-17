import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { VentoinhaProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Ventoinha } from "~/components/TableRead/Datas/componentes/Ventoinha"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadVentoinha() {
    const [ventoinha, setVentoinha] = useState<VentoinhaProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setVentoinha(await getComponents("Ventoinha"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Ventoinha')
    }, [])

    console.log(ventoinha)

    return (
        <TableRead
            key={'Ventoinha'}
            id='Ventoinha'
            title="Ventoinha"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Tamanho', 'Locais Vendas']}
            body={ventoinha.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Ventoinha
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{ tamanho: `${componente.especificacoes.tamanho}` }}
                        />
                    )
                })}
        />
    )
}

export default ReadVentoinha
import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { GabineteProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Gabinete } from "~/components/TableRead/Datas/componentes/Gabinete"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadGabinete() {
    const [gabinete, setGabinete] = useState<GabineteProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setGabinete(await getComponents("Gabinete"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Gabinete')
    }, [])

    console.log(gabinete)

    return (
        <TableRead
            key={'Gabinete'}
            id='Gabinete'
            title="Gabinete"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Tipo', 'Locais Vendas']}
            body={gabinete.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Gabinete
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{ tipo: `${componente.especificacoes.tipo}` }}
                        />
                    )
                })}
        />
    )
}

export default ReadGabinete
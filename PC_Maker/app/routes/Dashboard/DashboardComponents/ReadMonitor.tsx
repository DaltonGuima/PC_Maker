import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { MonitorProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Monitor } from "~/components/TableRead/Datas/componentes/Monitor"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadMonitor() {
    const [monitor, setMonitor] = useState<MonitorProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setMonitor(await getComponents("Monitor"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Monitor')
    }, [])

    console.log(monitor)

    return (
        <TableRead
            key={'Monitor'}
            id='Monitor'
            title="Monitor"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'ResolucaoVer', 'TaxaDeAtualiz', 'Tamanho', 'Locais Vendas']}
            body={monitor.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Monitor
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{ resolucaover: `${componente.especificacoes.resolucaover}`, taxadeatualiz: `${componente.especificacoes.taxadeatualiz}`, tamanho: `${componente.especificacoes.tamanho}` }}
                        />
                    )
                })}
        />
    )
}

export default ReadMonitor
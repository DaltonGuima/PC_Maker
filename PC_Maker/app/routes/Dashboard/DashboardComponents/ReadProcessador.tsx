import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { ProcessadorProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Processador } from "~/components/TableRead/Datas/componentes/Processador"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadProcessador() {
    const [processador, setProcessador] = useState<ProcessadorProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setProcessador(await getComponents("Processador"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Processador')
    }, [])

    console.log(processador)

    return (
        <TableRead
            key={'Processador'}
            id='Processador'
            title="Processador"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Soquete',
                'nNucleos', 'nThreads', 'Frequencia', 'freBoost', 'Tdp', 'OverClock', 'GraficoIntegrado', 'TipoMemoria', 'Locais Vendas']}

            body={processador.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Processador
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{
                                soquete: `${componente.especificacoes.soquete}`, nNucleos: `${componente.especificacoes.nNucleos}`,
                                nThreads: `${componente.especificacoes.nThreads}`, frequencia: `${componente.especificacoes.frequencia}`,
                                freBoost: `${componente.especificacoes.freBoost}`, tdp: `${componente.especificacoes.tdp}`,
                                overClock: `${componente.especificacoes.overClock}`, graficoIntregado: `${componente.especificacoes.graficoIntregado}`,
                                tipoMemoria: `${componente.especificacoes.tipoMemoria}`
                            }}
                        />
                    )
                })}
        />
    )
}

export default ReadProcessador
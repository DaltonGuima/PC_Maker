import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { ArmazenamentoProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Armazenamento } from "~/components/TableRead/Datas/componentes/Armazenamento"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadArmazenamento() {
    const [armazenamento, setArmazenamento] = useState<ArmazenamentoProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setArmazenamento(await getComponents("Armazenamento"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Armazenamento')
    }, [])

    console.log(armazenamento)

    return (
        <TableRead
            key={'Armazenamento'}
            id='Armazenamento'
            title="Armazenamento"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Tipo', 'Capacidade', 'VelEscrita', 'VelLeitura', 'Locais Vendas']}
            body={armazenamento.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Armazenamento
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{
                                tipo: `${componente.especificacoes.tipo}`, capacidade: `${componente.especificacoes.capacidade}`,
                                velEscrita: `${componente.especificacoes.velEscrita}`, velLeitura: `${componente.especificacoes.velLeitura}`
                            }}
                        />
                    )
                })}
        />
    )
}

export default ReadArmazenamento
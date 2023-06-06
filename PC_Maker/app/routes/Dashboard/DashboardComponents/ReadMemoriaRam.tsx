import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { RamProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Ram } from "~/components/TableRead/Datas/componentes/Ram"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadRam() {
    const [ram, setRam] = useState<RamProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setRam(await getComponents("Memória RAM"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('MemoriaRam')
    }, [])

    console.log(ram)

    return (
        <TableRead
            key={'MemoriaRam'}
            id='MemoriaRam'
            title="Memória RAM"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Capacidade', 'Velocidade', 'Tecnologia', 'Voltagem', 'Latencia', 'Notebook', 'Locais Vendas']}
            body={ram.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Ram
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{
                                capacidade: `${componente.especificacoes.capacidade}`, velocidade: `${componente.especificacoes.velocidade}`,
                                tecnologia: `${componente.especificacoes.tecnologia}`, voltagem: `${componente.especificacoes.voltagem}`,
                                latencia: `${componente.especificacoes.latencia}`, notebook: `${componente.especificacoes.notebook}`
                            }}
                        />
                    )
                })}
        />
    )
}

export default ReadRam
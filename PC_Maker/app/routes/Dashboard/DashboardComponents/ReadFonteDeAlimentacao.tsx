import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { PsuProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Psu } from "~/components/TableRead/Datas/componentes/Psu"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadPsu() {
    const [psu, setPsu] = useState<PsuProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setPsu(await getComponents("Fonte de Alimentação"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('FonteDeAlimentacao')
    }, [])

    console.log(psu)

    return (
        <TableRead
            key={'FonteDeAlimentacao'}
            id='FonteDeAlimentacao'
            title="Fonte de Alimentação"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Potencia', 'Certificacao', 'Pfc', 'Ventoinha', 'ConPrincipal', 'ConCPU', 'ConPCIe', 'ConSATA', 'Locais Vendas']}
            body={psu.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Psu
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{
                                potencia: `${componente.especificacoes.potencia}`, certificacao: `${componente.especificacoes.certificacao}`,
                                pfc: `${componente.especificacoes.pfc}`, ventoinha: `${componente.especificacoes.ventoinha}`,
                                conPrincipal: `${componente.especificacoes.conPrincipal}`, conCPU: `${componente.especificacoes.conCPU}`,
                                conPCIe: `${componente.especificacoes.conPCIe}`, conSATA: `${componente.especificacoes.conSATA}`
                            }}
                        />
                    )
                })}
        />
    )
}

export default ReadPsu
import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { MouseProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Mouse } from "~/components/TableRead/Datas/componentes/Mouse"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadMouse() {
    const [mouse, setMouse] = useState<MouseProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setMouse(await getComponents("Mouse"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Mouse')
    }, [])

    console.log(Mouse)

    return (
        <TableRead
            key={'Mouse'}
            id='Mouse'
            title="Mouse"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'NdeBotoes', 'Dpi', 'Locais Vendas']}
            body={mouse.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Mouse
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{ ndebotões: `${componente.especificacoes.ndebotões}`, dpi: `${componente.especificacoes.dpi}` }}
                        />
                    )
                })}
        />
    )
}

export default ReadMouse
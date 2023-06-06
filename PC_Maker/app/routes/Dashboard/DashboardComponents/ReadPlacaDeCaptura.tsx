import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { PlacaDeCapturaProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { PlacaDeCaptura } from "~/components/TableRead/Datas/componentes/PlacaDeCaptura"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadPlacaDeCaptura() {
    const [placaDeCaptura, setPlacaDeCaptura] = useState<PlacaDeCapturaProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setPlacaDeCaptura(await getComponents("Placa de Captura"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('PlacaDeCaptura')
    }, [])

    console.log(placaDeCaptura)

    return (
        <TableRead
            key={'PlacaDeCaptura'}
            id='PlacaDeCaptura'
            title="PlacaDeCaptura"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Interface', 'Saida', 'Taxadbit', 'Maioresupor', 'Locais Vendas']}
            body={placaDeCaptura.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <PlacaDeCaptura
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{
                                interface: `${componente.especificacoes.interface}`, saida: `${componente.especificacoes.saida}`,
                                taxadbit: `${componente.especificacoes.taxadbit}`, maioresupor: `${componente.especificacoes.maioresupor}`
                            }}
                        />
                    )
                })}
        />
    )
}

export default ReadPlacaDeCaptura
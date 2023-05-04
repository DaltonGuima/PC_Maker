import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { VentoinhaProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Ventoinha } from "~/components/TableRead/Datas/componentes/Ventoinha"
import { SearchByNome } from "~/components/TableRead/TableElements";
import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadProcessador() {
    const [ventoinha, setVentoinha] = useState<VentoinhaProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchByNome)

    async function handleAxios() {
        setVentoinha(await getComponents("Ventoinha"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Ventoinha')
    }, [])


    return (
        <TableRead
            key={'Ventoinha'}
            id='Ventoinha'
            tipoCRUD={'componentes'}
            insereDados
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Vendedor', 'Link Produto', 'Tamanho']}
            body={ventoinha.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Ventoinha
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            preco={componente.preco}
                            vendedor={componente.vendedor}
                            especificacoes={{ tamanho: `${componente.especificacoes.tamanho}` }}
                            linkProduto={componente.linkProduto}
                        />
                    )
                })}
        />
    )
}

export default ReadProcessador
import { TableRead } from "../../components/TableRead"
import { Gabinete } from "../../components/TableRead/Datas/componentes/Gabinete"
import { Processador } from "../../components/TableRead/Datas/componentes/Processador"
import { Mouse } from "../../components/TableRead/Datas/componentes/Mouse"
import { Armazenamento } from "../../components/TableRead/Datas/componentes/Armazenamento"
import { Ram } from "../../components/TableRead/Datas/componentes/Ram"
import { Gpu } from "../../components/TableRead/Datas/componentes/Gpu"
import { Psu } from "../../components/TableRead/Datas/componentes/Psu"
import { CoolerBox } from "../../components/TableRead/Datas/componentes/CoolerBox"
import { SelectOption } from "../../components/SelectOptionComponent"
import { Teclado } from "../../components/TableRead/Datas/componentes/Teclado"
import { PlacaMae } from "../../components/TableRead/Datas/componentes/PlacaMae"
import { PlacaDeCaptura } from "../../components/TableRead/Datas/componentes/PlacaDeCaptura"
import { Monitor } from "../../components/TableRead/Datas/componentes/Monitor"
import { PlacaDeSom } from "../../components/TableRead/Datas/componentes/PlacaDeSom"
import { Ventoinha } from "../../components/TableRead/Datas/componentes/Ventoinha"
import { useEffect, useState } from "react"
import axios from 'axios';
import type { Componente } from "~/Interface/ComponenteInterface"
import { Outlet, useNavigate } from "@remix-run/react"



function DashboardComponents() {

    const navigate = useNavigate();

    /* const [componentes, setComponentes] = useState<Componente[]>([]);

    useEffect(() => {
        axios('http://127.0.0.1:8080/api/v1/produtos').then(response => {
            setComponentes(response.data);
        })
    }, []); */

    function Navegacao() {

        const localConst = document.getElementById('Navegador') as HTMLSelectElement
        navigate(`/Dashboard/DashboardComponents/Read${localConst.value}`)

    }

    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid mt-3">
                    <h3 className="title-5 m-b-35 text-light table-h3">Escolha o Componente</h3>
                    <div className="table-data__tool">
                        <div className="table-data__tool-left"> {/* essa */}
                            <div className="rs-select2--light rs-select2--md">
                                <select onChange={Navegacao} className="js-select2 selectFilter" name="property" id='Navegador' defaultValue={''}>
                                    <SelectOption />
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row"></div>

                    <Outlet />

                </div>
            </div>

        </div>

    )
}

export default DashboardComponents


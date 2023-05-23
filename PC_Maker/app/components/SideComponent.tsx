import { useState } from "react"

interface SideComponentProps {
    body: React.ReactNode,
    nome: string
}

export function SideComponent(props: SideComponentProps) {
    const [display, setDisplay] = useState("block")
    const [iconState, setIconState] = useState("plus")

    function HandeDisplay() {
        const newDisplay = display === "none" ? "block" : "none"
        setDisplay(newDisplay)
        const newIcon = iconState === "plus" ? "minus" : "plus"
        setIconState(newIcon)
    }

    return (
        <li className="active" >
            <div className="row my-3" onClick={HandeDisplay}>
                <div className="col-7">
                    <h3>{props.nome}</h3>
                </div>
                <div className="col text-end">
                    <i className={`fa-solid fa-${iconState} bg-transparent`}></i>
                </div>
            </div>
            <form className={`d-${display} side-component`}>
                {
                    props.body
                }
            </form>
        </li>
    )
}
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Dispatch, InputHTMLAttributes } from "react";


interface InputProps {
    setHide?: Dispatch<boolean>
    hide?: boolean
    inputProperties: InputHTMLAttributes<HTMLInputElement>
}

export function Input(props: InputProps) {

    const textUpper = () => {
        if (props.inputProperties.id != undefined)
            return (props.inputProperties.id.charAt(0).toUpperCase() + props.inputProperties.id.slice(1)).replace('-', ' ')
        else
            return ""
    }

    function handleHide() {
        if (props.hide != null && props.setHide != null)
            props.setHide(!props.hide)
    }

    return (
        <div className="form-outline pt-2">
            <label className="form-label font-weight-bold"
                htmlFor={props.inputProperties.id}>
                {textUpper()}
            </label>

            <div className="form-control form-control-plaintext">
                <input
                    {...props.inputProperties}
                />
                {props.inputProperties.name == "senha" ?
                    <button type="button" onClick={handleHide} className="btn btn-outline-info rounded-circle mx-1">
                        {props.hide ?
                            <FontAwesomeIcon title="Mostrar Senha" icon={faEyeSlash} />
                            :
                            <FontAwesomeIcon title="Ocultar Senha" icon={faEye} />
                        }
                    </button>
                    :
                    null
                }
            </div>
        </div>
    )


}


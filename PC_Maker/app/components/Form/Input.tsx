import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Dispatch, InputHTMLAttributes } from "react";


interface InputProps {
    id: string;
    setHide?: Dispatch<boolean>
    hide?: boolean
    inputProperties: InputHTMLAttributes<HTMLInputElement>
}

export function Input(props: InputProps) {
    const textUpper = props.id.charAt(0).toUpperCase() + props.id.slice(1)

    function handleHide() {
        if (props.hide != null && props.setHide != null)
            props.setHide(!props.hide)
    }

    return (
        <div className="form-outline pt-2">
            <label className="form-label font-weight-bold"
                htmlFor={props.id}>
                {textUpper.replace('-', ' ')}
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


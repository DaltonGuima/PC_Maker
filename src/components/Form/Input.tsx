import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
}

export function Input(props: InputProps) {
    const textUpper = props.id.charAt(0).toUpperCase() + props.id.slice(1)

    return (
        <div className="form-outline pt-2">
            <label className="form-label font-weight-bold" 
                htmlFor={props.id}>
                    {textUpper.replace('-',' ')}
            </label>
            <input
                className='form-control form-control-plaintext' 
                {...props}
            />
        </div>
    )

    
}
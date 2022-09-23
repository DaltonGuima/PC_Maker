

interface ButtonProps{
    text: string;
    id: string;
    name: string;
}

export function SubmitForm(props :ButtonProps) {
    return (
        <button
            id={props.id}
            name={props.id}
            className="btn text-light btn-block bg-secondary btn-login mt-5"
            type="submit"
        >
            {props.text}
        </button>
    )
}
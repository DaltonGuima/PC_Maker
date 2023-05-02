

interface ButtonProps {
    text: string;
    id: string;
    name: string;
}

export function SubmitForm(props: ButtonProps) {
    return (
        <div className="col col-lg-2 px-3 d-block">
            <button
                id={props.id}
                name={props.id}
                className="btn text-light bg-secondary btn-login px-lg-4"
                type="submit"
            >
                {props.text}
            </button>
        </div>
    )
}
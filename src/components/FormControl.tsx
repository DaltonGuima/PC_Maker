export function FormControl() {

    function closeForm(){
        location.reload();
    }
    
    return(
        <div className="col-md-11 pt-5 mt-4 text-light Validador" id="ValidadorMinhaConta">
            <button className="btn text-light btn-block" type="reset" title="Limpar"><i className="fa fa-trash" aria-hidden="true"></i>
                <span className="d-none d-md-inline" > Limpar</span>
            </button>

            <div className="float-end d-inline text-light user-select-none">
                <button className="btn text-light btn-block bg-danger d-none-text mx-2" title="Cancelar" type="button" id="cancel" onFocus={closeForm}><i className="fa fa-close" aria-hidden="true"></i>
                    <span className="d-none d-md-inline"> Cancelar</span>
                </button>
                <button className="btn btn-block text-light bg-success mx-2" title="Salvar" type="submit"><i className="fa fa-check" aria-hidden="true"></i>
                    <span className="d-none d-md-inline" > Salvar</span>
                </button>
            </div>
        </div>
    )
}
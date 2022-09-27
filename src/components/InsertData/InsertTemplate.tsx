function DashboardInsercaoTemplate(){
    return (
        <div className="main-content">
        
        <div className="col-lg-6 tabela-insercao">
        <div className="card">
            <div className="card-header">
                <strong>Templatezin</strong>
            </div>
            <div className="card-body card-block">
                <form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    
                    <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="text-input" className=" form-control-label">Text Input</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input type="text" id="text-input" name="text-input" placeholder="Text" className="form-control"/>
                            <small className="help-block form-text text-muted">This is a help text</small>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="email-input" className=" form-control-label">Email Input</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input type="email" id="email-input" name="email-input" placeholder="Enter Email" className="form-control"/>
                            <small className="help-block form-text">Please enter your email</small>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col col-md-3">
                            <label htmlFor="selectSm" className=" form-control-label">Select</label>
                        </div>
                        <div className="col-12 col-md-9">
                            <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                                <option value="0">Please select</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                                <option value="4">Option #4</option>
                                <option value="5">Option #5</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="row form-group">
                        <div className="col col-md-3">
                            <label className=" form-control-label">Radios</label>
                        </div>
                        <div className="col col-md-9">
                            <div className="form-check">
                                <div className="radio">
                                    <label htmlFor="radio1" className="form-check-label ">
                                        <input type="radio" id="radio1" name="radios" value="option1" className="form-check-input"/>Option 1
                                    </label>
                                </div>
                                <div className="radio">
                                    <label htmlFor="radio2" className="form-check-label ">
                                        <input type="radio" id="radio2" name="radios" value="option2" className="form-check-input"/>Option 2
                                    </label>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="card-footer">
                <button className="au-btn au-btn-icon au-btn--purple au-btn--small">
                    <i className="zmdi zmdi-plus"></i>Adicionar</button>
                <div className="rs-select2--dark rs-select2--sm rs-select2--dark2 ">
                </div>
            </div> 
        </div>
    </div>

        </div>
    )
}
export default DashboardInsercaoTemplate
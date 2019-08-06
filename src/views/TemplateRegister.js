import React from 'react';
import './components.css'

const TemplateRegister = () => {

        return (
                <div className="register container">
                        
                        <p> Regístrate y <strong>COLABORA</strong> con la Fundación </p>
                        <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda cupiditate nemo adipisci aut cum optio quas recusandae.
    </p>
                        

                        <div className="form-group col-xs-12 col-sm-12 col-md-8 col-lg-6">
                                <label className="control-label">R.U.T</label>
                                <input type="text" className="form-control" placeholder="Ej. 12345678-9" required />
                                <label className="control-label">Teléfono</label>
                                <input type="number" className="form-control" placeholder="Ej. 9-12345678" required />
                                <br></br>
                                <button type="submit" className="btn btn-primary">Registrar</button>

                        </div>
                </div>
        )

}

export default TemplateRegister;
import React, { Component } from 'react';
import Axios from 'axios';



class Registro extends React.Component  {
  render(){
    return (
<div className="form-container container">

<div className="row d-flex align-items-center justify-content-center">
    <div className="col-sm-8 pt-5">
        <form>
          <h2 className="mb-5">Registro</h2>
            <div className="form-row">
                <div className="col form-group">
                    <label>Primer Nombre</label>
                    <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="col form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="" />
                </div>
            </div>
            <div className="form-group">
                <label>Correo</label>
                <input type="email" className="form-control" placeholder="" />
            </div>
            <div className="form-group">
                <label className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="option1" />
                    <span className="form-check-label">Hombre</span>
                </label>
                <label className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" value="option2" />
                    <span className="form-check-label">Mujer</span>
                </label>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Ciudad</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                    <label>Pais</label>
                    <select id="inputState" className="form-control">
                        <option>Elige tu pais de residencia</option>
                        <option>Uzbekistan</option>
                        <option>Rusia</option>
                        <option selected="">United States</option>
                        <option>India</option>
                        <option>Afganistan</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input className="form-control" type="password" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Register </button>
            </div>
            <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br />
                Terms of use and Privacy Policy.</small>
        </form>
    </div>
</div>

</div>
    );
  }
}

export default Registro;

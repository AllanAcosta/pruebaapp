import React, { Component } from 'react';



class Inicio extends React.Component  {

  render(){
    return (
<div className="form-container container">

<div className="row d-flex align-items-center justify-content-center">
    <div className="col-sm-8 pt-5">
        <form>
          <h2 className="mb-5">Registro</h2>
            <div className="form-group">
                <label>Correo</label>
                <input type="email" className="form-control" placeholder="" />
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

export default Inicio;

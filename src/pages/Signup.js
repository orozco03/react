import React from 'react';

import Title from '../components/Title';
import Container from '../components/Container';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router-dom';


export default class Signup extends React.Component{
  render(){
    return(
       <div className="row middle-xs">
         <div className="col-xs-12 col-sm-6">
          <Container>
          <div style={{'textAling':'left'}}>
            <Title/>
            <h1 style={{ color:'pink' }}>Registrate</h1>
            <TextField
            floatingLabelText="Correo electrónico"
            type="email"
            className="textfield"/>
            <TextField
            floatingLabelText="Contraseña"
            type="password"
            className="textfield"/>
            <div className="Login-actions">
            <Link to="/login" style={{marginRight:"1em"}}>Ya tengo cuenta</Link>
              <RaisedButton label="Crear cuenta" secondary={true}/>
            </div>
            <div className="atras">
            <Link to="/" style={{marginRight:"1em"}}>Atras</Link>
            </div>
          </div>
          </Container>
         </div>

      </div>
    );
  }
}

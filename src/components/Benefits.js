import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';

import {indigo400,redA400,lightBlue400,amberA400} from 'material-ui/styles/colors';
import Title from '../components/Title';
import data from '../requests/places';

export default class Benefit extends React.Component{
  render(){
    return(
      <ul>
      <Card className="Header-Benefit">
      <CardText>
      <div className="row">
      <div className="Header-Benefit-image" style={{'backgroundColor': redA400}}>
      <img src={process.env.PUBLIC_URL + '/images/heart.svg'}/>
      </div>
      <div className="Header-Benefit-content">
      <h3>Calificaciones con emociones</h3>
      <p>Califica tus lugares con experiencia, no con números</p>
      </div>
      </div>
      </CardText>
      </Card>
      <Card className="Header-Benefit">
      <CardText>
      <div className="row">
      <div className="Header-Benefit-image" style={{'backgroundColor': lightBlue400}}>
      <img src={process.env.PUBLIC_URL + '/images/no-internet.svg'}/>
      </div>
      <div className="Header-Benefit-content">
      <h3>¿Sin Internet? Sin problemas</h3>
      <p>Places funciona sin internet</p>
      </div>
      </div>
      </CardText>
      </Card>
      <Card className="Header-Benefit">
      <CardText>
      <div className="row">
      <div className="Header-Benefit-image" style={{'backgroundColor': amberA400}}>
      <img src={process.env.PUBLIC_URL + '/images/start.svg'}/>
      </div>
      <div className="Header-Benefit-content">
      <h3>Tus lugares favoritos</h3>
      <p>Define tu lista de sitios favoritos</p>
      </div>
      </div>
      </CardText>
      </Card>
    </ul>
    );
  }
}

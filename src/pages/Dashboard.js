
import React from 'react';

import FlatButton from 'material-ui/FlatButton';

import data from '../requests/places';
import { Link } from 'react-router-dom';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

export default class Dashboard extends React.Component{

constructor(props){
  super(props);

  this.state = {
    places: data.places
  }
}

places(){
  return this.state.places.map((place,index)=>{
     return <PlaceHorizontal place={place}/>
  })
}

  render(){
    return(
      <div>
      <Link to='/new'>
       <FloatingActionButton className="FAB"
       secondary={true}>
       <ContentAdd/>
       </FloatingActionButton>
       </Link>
       <Container>
          <div className="row">
            <div className="" style={{'textAling':"left"}}>
              <FlatButton label="Explorar"/>
              <FlatButton label="Favoritos"/>
              <FlatButton label="Visitar previas"/>
            </div>
            <div className="col-cs-12 col-md-10"></div>
            {this.places()}
            </div>
       </Container>
      </div>
    );
  }
}
